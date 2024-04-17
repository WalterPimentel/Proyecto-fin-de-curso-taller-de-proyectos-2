import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-odontograma-anatomico',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css']
})
export class OdontogramaAnatomicoComponent {

  fechaActual: string;

  selectedRowIndex: number | null = null;

  datos: any[] = [];
  modalOpen: boolean = false;
  selectedTooth: string | null = null;
  backgroundColor: string = '#a7baf296';

  tratamientos = [
  ];

  tratamientoColores: { [key: string]: string } = {
    'Apiceptomía': '#FF5733',
    'Carillas': '#00BBFF',
    'Cirugía': '#A1FF33',
    'Contanto Alimento': '#FF33A1',
    'Corona': '#AB9FC3',
    'Curetaje': '#25A668',
    'Endodoncia': '#33FF57',
    'Esqueletico': '#BBFF00',
    'Estética': '#00FFBB',
    'Exploración': '#66FF33',
    'Extrusión': '#FFA133',
    'Furcas': '#C3A6A6',
    'Girar': '#E6FF50',
    'Impacto Alimento': '#33FFA1',
    'Impresiones': '#45Fa33',
    'Inclinacion': '#F9F6BC',
    'Limpieza': '#54EFFF',
    'Movilidad': '#456D3E',
    'Obturacion': '#FFBCF5',
    'Ortodoncia': '#F1DABE',
    'Perno': '#FF7A00',
    'Pilar solo': '#A35E8F',
    'Pilar transepitelial': '#2395FF',
    'Placa descarga': '#8BECE6',
    'Protesis removible': '#D39BFF',
    'Puente': '#B89BDD',
    'Quitar': '#AC1F00',
    'Radiografia': '#9C7FC0',
    'Reconstrucción': '#0CA3C3',
    'Sangrado': '#FF3366',
    'Sellador': '#A133FF',
    'Sensibilidad': '#E48BEC',
    'Supurado': '#9F0DAC',
    'Tornillo': '#E5DDFE',
    'Tornillo Solo': '#D4FEFF',
    'Tratamiento': '#008826'
  };

  selectedTreatment: string = ''; // Asegúrate de inicializar con un valor si es necesario


  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.markForCheck();

    //lógica para obtener la fecha actual
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;
    this.fechaActual = new Date().toLocaleDateString('es-ES', options);
  }

  closeModal(): void {
    this.modalOpen = false;
    this.selectedTooth = null;
    this.selectedRowIndex = null;
  }

  openModal(toothId: string): void {
    this.modalOpen = true;
    this.selectedTooth = toothId;
    (document.getElementById('selpieza') as HTMLSelectElement).value = toothId;

    const toothIndex = this.datos.findIndex((tooth) => tooth.pieza === toothId);
    this.selectedRowIndex = toothIndex !== -1 ? toothIndex : null;
    //color que desea cunado cambias
    this.backgroundColor = '#a7baf296';
  }

  addTreatment(): void {
    const selectedPiece = (document.getElementById('selpieza') as HTMLSelectElement).value;
    const selectedTreatment = (document.getElementById('seltratamiento') as HTMLSelectElement).value;
    const selectedFace = (document.getElementById('selcara') as HTMLSelectElement).value;

    const color = this.tratamientoColores[selectedTreatment] || '#a7baf296';
    const iconPath = `assets/tratamientos/icono-${selectedTreatment.toLowerCase()}.png`;

    this.datos.push({
      tratamiento: selectedTreatment,
      pieza: selectedPiece,
      cara: selectedFace,
      eliminar: '',
      color: color,
      icono: iconPath  // Agrega la ruta del icono

    });

    this.closeModal();
  }

  getToothIcon(toothId: string): string {
    const toothIndex = this.datos.findIndex((tooth) => tooth.pieza === toothId);
    return toothIndex !== -1 ? this.datos[toothIndex].icono : '';
  }


  getToothColor(toothId: string): string {
    const toothIndex = this.datos.findIndex((tooth) => tooth.pieza === toothId);
    return toothIndex !== -1 ? this.datos[toothIndex].color : '';
  }

  eliminarFila(index: number): void {
    // Puedes ajustar esto según tus necesidades
    this.datos.splice(index, 1);
  }
}
