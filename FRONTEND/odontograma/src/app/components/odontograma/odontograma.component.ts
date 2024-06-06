import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HistoriaClinicaService } from '../../services/historiaClinica.service';
import { OdontogramaService } from '../../services/odontograma.service';
import { ModalUIComponent } from '../ui/modal/modal.component';

import axios from 'axios';

interface ToothTreatment {
  tratamiento: string;
  pieza: string;
  cara: string;
  color: string;
  icono: string;
}

@Component({
  selector: 'app-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css'],
})
export class OdontogramaComponent {
  isLoading: boolean;
  paciente: any;
  userAuth: any;
  edadCategoria: string = '';
  tipoOdontograma: string;
  fechaActual = new Date();
  selectedRowIndex: number | null = null;
  datos: ToothTreatment[] = [];
  modalOpen: boolean = false;
  selectedTooth: string | null = null;
  selectedTreatment: string = '';
  odontograma: any;
  form: FormGroup;
  public saveButtonPressed = false;
  formInvalid: boolean = false;
  @ViewChild('modal') modal!: ModalUIComponent;

  tratamientos = [
    'Apiceptomía',
    'Carillas',
    'Cirugía',
    'Contanto Alimento',
    'Corona',
    'Curetaje',
    'Endodoncia',
    'Esqueletico',
    'Estética',
    'Exploración',
    'Extrusión',
    'Furcas',
    'Girar',
    'Impacto Alimento',
    'Impresiones',
    'Inclinacion',
    'Limpieza',
    'Movilidad',
    'Obturacion',
    'Ortodoncia',
    'Perno',
    'Pilar solo',
    'Pilar transepitelial',
    'Placa descarga',
    'Protesis removible',
    'Puente',
    'Quitar',
    'Radiografia',
    'Reconstrucción',
    'Sangrado',
    'Sellador',
    'Sensibilidad',
    'Supurado',
    'Tornillo',
    'Tornillo Solo',
    'Tratamiento',
  ];

  tratamientoColores: { [key: string]: string } = {
    Apiceptomía: '#FF5733',
    Carillas: '#00BBFF',
    Cirugía: '#A1FF33',
    'Contanto Alimento': '#FF33A1',
    Corona: '#AB9FC3',
    Curetaje: '#25A668',
    Endodoncia: '#33FF57',
    Esqueletico: '#BBFF00',
    Estética: '#00FFBB',
    Exploración: '#66FF33',
    Extrusión: '#FFA133',
    Furcas: '#C3A6A6',
    Girar: '#E6FF50',
    'Impacto Alimento': '#33FFA1',
    Impresiones: '#45Fa33',
    Inclinacion: '#F9F6BC',
    Limpieza: '#54EFFF',
    Movilidad: '#456D3E',
    Obturacion: '#FFBCF5',
    Ortodoncia: '#F1DABE',
    Perno: '#FF7A00',
    'Pilar solo': '#A35E8F',
    'Pilar transepitelial': '#2395FF',
    'Placa descarga': '#8BECE6',
    'Protesis removible': '#D39BFF',
    Puente: '#B89BDD',
    Quitar: '#AC1F00',
    Radiografia: '#9C7FC0',
    Reconstrucción: '#0CA3C3',
    Sangrado: '#FF3366',
    Sellador: '#A133FF',
    Sensibilidad: '#E48BEC',
    Supurado: '#9F0DAC',
    Tornillo: '#E5DDFE',
    'Tornillo Solo': '#D4FEFF',
    Tratamiento: '#008826',
  };

  formatDate(date: Date | string): string {
    let validDate: Date;

    if (typeof date === 'string') {
      const [day, month, year] = date.split('/');
      validDate = new Date(Number(year), Number(month) - 1, Number(day));
    } else {
      validDate = date;
    }

    return validDate.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private historiaClinicaService: HistoriaClinicaService,
    private odontogramaService: OdontogramaService,
    private fb: FormBuilder
  ) {
    this.tipoOdontograma = 'geometrico';
    this.isLoading = true;
    this.cdr.markForCheck();
    this.odontograma = [];
    this.form = this.fb.group({
      especificaciones: ['', Validators.required],
      observaciones: ['', Validators.required],
    });
  }

  closeModal(): void {
    this.modalOpen = false;
    this.selectedTooth = null;
    this.selectedRowIndex = null;
    this.selectedTreatment = '';
  }

  openModal(toothId: string): void {
    this.modalOpen = true;
    this.selectedTooth = toothId;

    const existingToothIndex = this.datos.findIndex(
      (tooth) => tooth.pieza === toothId
    );

    if (existingToothIndex !== -1) {
      this.selectedRowIndex = existingToothIndex;
      this.selectedTreatment = this.datos[existingToothIndex].tratamiento;
    } else {
      this.selectedRowIndex = null;
      this.selectedTreatment = '';
    }
  }

  addTreatment(): void {
    if (!this.selectedTooth || !this.selectedTreatment) {
      return;
    }

    const selectedFace = (
      document.getElementById('selcara') as HTMLSelectElement
    ).value;
    const color = this.tratamientoColores[this.selectedTreatment];
    const iconPath = `assets/tratamientos/icono-${this.selectedTreatment.toLowerCase()}.png`;

    const newTreatment: ToothTreatment = {
      tratamiento: this.selectedTreatment,
      pieza: this.selectedTooth,
      cara: selectedFace,
      color: color,
      icono: iconPath,
    };

    if (this.selectedRowIndex !== null) {
      this.datos[this.selectedRowIndex] = newTreatment;
    } else {
      this.datos.push(newTreatment);
    }

    this.closeModal();
  }

  ngOnInit(): void {
    this.historiaClinicaService.getPacienteAleatorio().subscribe((paciente) => {
      this.paciente = paciente;
      this.edadCategoria = paciente.edad > 12 ? 'adulto' : 'menor';
      this.isLoading = false;
    });
    this.historiaClinicaService.getUserAuthAleatorio().subscribe((userAuth) => {
      this.userAuth = userAuth;
      this.isLoading = false;
    });
    this.form = this.fb.group({
      especificaciones: ['', Validators.required],
      observaciones: ['', Validators.required],
      odontograma: [
        Object.keys(this.odontograma).length > 0,
        Validators.requiredTrue,
      ],
    });

    this.odontogramaService.currentOdontograma.subscribe((odontograma) => {
      this.odontograma = odontograma;
      if (!this.form.controls['odontograma']) {
        this.form.addControl(
          'odontograma',
          this.fb.control(
            Object.keys(this.odontograma).length > 0,
            Validators.requiredTrue
          )
        );
      } else {
        this.form.controls['odontograma'].setValue(
          Object.keys(this.odontograma).length > 0,
          { emitEvent: false }
        );
      }
    });
  }

  isFormValid() {
    if (this.form.valid) {
      return true;
    } else {
      console.log('El formulario no es válido');
      return false;
    }
  }

  openConfirmationModal() {
    if (this.isFormValid()) {
      const numDientes = Object.keys(this.odontograma).length;
      const dientesTexto = numDientes > 1 ? 'dientes' : 'diente';
      const pacienteNombre = this.paciente.nombres;
      this.modal
        .open(
          'Confirmar Guardado de Odontograma',
          `¿Estás seguro de que quieres guardar este odontograma de ${pacienteNombre}? Has marcado ${numDientes} ${dientesTexto}.`,
          'confirm'
        )
        .then((result) => {
          if (result) {
            this.isLoading = true;
            this.onSave();
          }
        });

      this.modal.onConfirm.subscribe(() => this.onSave());
    }
  }

  onSave() {
    if (this.isFormValid()) {
      const odontograma = {
        especificaciones: this.form.controls['especificaciones'].value,
        observaciones: this.form.controls['observaciones'].value,
        tipoOdontograma: this.tipoOdontograma,
        edadCategoria: this.edadCategoria,
        fecha: this.formatDate(this.fechaActual),
        operador: {
          role: this.userAuth.role,
          fullname: this.userAuth.fullname,
          email: this.userAuth.email,
        },
        odontograma: this.odontograma,
      };

      const paciente = {
        dni: this.paciente.dni,
        nombres: this.paciente.nombres,
        apellidos: this.paciente.apellidos,
        edad: this.paciente.edad,
        fechaRegistro: this.formatDate(this.paciente.fecha),
        odontogramas: [odontograma],
      };

      const pacienteJSON = JSON.stringify(paciente);

      axios
        .post('http://localhost:3001/pacientes', pacienteJSON, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          this.isLoading = false;
          this.modal.open(
            'Odontograma Guardado Exitosamente',
            'El odontograma de' +
              paciente.nombres +
              ' ha sido guardado con éxito.',
            'success'
          );
        })
        .catch((error) => {
          this.isLoading = false;
          this.modal.open(
            'Error al Guardar Odontograma',
            'Hubo un error al guardar el odontograma de ' +
              paciente.nombres +
              '. Por favor, inténtalo de nuevo. ' +
              error.code,
            'error'
          );
          console.error('Error al guardar odontograma:', error);
        });
    }
  }

  getToothIcon(toothId: string): string | undefined {
    return this.datos.find((tooth) => tooth.pieza === toothId)?.icono;
  }

  getToothColor(toothId: string): string | undefined {
    return this.datos.find((tooth) => tooth.pieza === toothId)?.color;
  }

  eliminarFila(index: number): void {
    this.datos.splice(index, 1);
  }
}
