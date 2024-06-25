import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { HistoriaClinicaService } from '../../services/historiaClinica.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
})
export class PacientesComponent implements OnInit {
  todosLosPacientes: any[] = [];
  pacientes: any[] = [];
  pacientesPaginados: any[] = [];
  isLoading: boolean;
  searchControl = new FormControl('');
  filteredPacientes: Observable<any[]> = of([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private historiaClinicaService: HistoriaClinicaService
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.cargarPacientes();
    this.filteredPacientes = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarPacientes(value || ''))
    );
  }

  ngAfterViewInit() {
    this.filteredPacientes.subscribe((filtered) => {
      this.pacientes = filtered;
      if (this.paginator) {
        this.paginator.firstPage();
      }
      this.actualizarPacientesPaginados();
    });
  }

  cargarPacientes() {
    this.historiaClinicaService.getTodosLosPacientes().subscribe({
      next: (data) => {
        this.todosLosPacientes = data;
        this.pacientes = data;
        this.isLoading = false;
        setTimeout(() => this.actualizarPacientesPaginados());
      },
      error: (error) => {
        console.error('Hubo un error al cargar los pacientes: ', error);
        this.isLoading = false;
      },
    });
  }

  actualizarPacientesPaginados() {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      this.pacientesPaginados = this.pacientes.slice(
        startIndex,
        startIndex + this.paginator.pageSize
      );
    }
  }

  filtrarPacientes(value: string): any[] {
    if (!value) {
      return this.todosLosPacientes;
    }
    const filterValue = value.toLowerCase();
    return this.todosLosPacientes.filter(
      (paciente) =>
        paciente.nombres.toLowerCase().includes(filterValue) ||
        paciente.apellidos.toLowerCase().includes(filterValue) ||
        paciente.dni.toLowerCase().includes(filterValue)
    );
  }

  cambiarPagina(event: PageEvent) {
    this.actualizarPacientesPaginados();
  }
}
