import { Component, ChangeDetectorRef } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';

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
  edadCategoria: string = '';
  tipoOdontograma: string;
  fechaActual = new Date();
  selectedRowIndex: number | null = null;
  datos: ToothTreatment[] = [];
  modalOpen: boolean = false;
  selectedTooth: string | null = null;
  selectedTreatment: string = '';

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
    private pacienteService: PacienteService
  ) {
    this.tipoOdontograma = 'geometrico';
    this.isLoading = true;
    this.cdr.markForCheck();
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
    this.pacienteService.getPacienteAleatorio().subscribe((paciente) => {
      this.paciente = paciente;
      this.edadCategoria = paciente.edad > 12 ? 'adulto' : 'menor';
      setTimeout(() => {
        this.isLoading = false;        
      }, 3000);
    });
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
