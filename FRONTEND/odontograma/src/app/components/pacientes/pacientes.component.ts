import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
})
export class PacientesComponent implements OnInit {
  todosLasCitas: any[] = [];
  citas: any[] = [];
  citasPaginadas: any[] = [];
  isLoading: boolean;
  searchControl = new FormControl('');
  filteredCitas: Observable<any[]> = of([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private citaService: CitaService
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.cargarCitas();
    this.filteredCitas = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarPacientes(value || ''))
    );
  }

  ngAfterViewInit() {
    this.filteredCitas.subscribe((filtered) => {
      this.citas = filtered;
      if (this.paginator) {
        this.paginator.firstPage();
      }
      this.actualizarCitasPaginados();
    });
  }

  cargarCitas() {
    this.citaService.getTodosLasCitas().subscribe({
      next: (data) => {
        this.todosLasCitas = data;
        this.citas = data;
        this.isLoading = false;
        setTimeout(() => this.actualizarCitasPaginados());
      },
      error: (error) => {
        console.error('Hubo un error al cargar los pacientes: ', error);
        this.isLoading = false;
      },
    });
  }

  actualizarCitasPaginados() {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      this.citasPaginadas = this.citas.slice(
        startIndex,
        startIndex + this.paginator.pageSize
      );
    }
  }

  filtrarPacientes(value: string): any[] {
    if (!value) {
      return this.todosLasCitas;
    }
    const filterValue = value.toLowerCase();
    return this.todosLasCitas.filter(cita =>
      cita.paciente.Nombre.toLowerCase().includes(filterValue) ||
      cita.paciente.ApellidoPaterno.toLowerCase().includes(filterValue) ||
      cita.paciente.ApellidoMaterno.toLowerCase().includes(filterValue) ||
      cita.paciente.NroCelular.toLowerCase().includes(filterValue) ||
      cita.paciente.dni.toLowerCase().includes(filterValue)
    );
  }

  cambiarPagina(event: PageEvent) {
    this.actualizarCitasPaginados();
  }
}
