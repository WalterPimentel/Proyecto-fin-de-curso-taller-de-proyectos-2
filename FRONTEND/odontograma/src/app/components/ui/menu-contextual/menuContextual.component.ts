import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-ui-menu-contextual',
  templateUrl: './menuContextual.component.html',
  styleUrls: ['./menuContextual.component.css'],
})
export class MenuContextualUIComponent {
  @Input() diente: number | null = null;
  @Input() part: string = '';
  @ViewChild('contextMenu', { static: false }) contextMenu!: ElementRef;
  @Input() contextMenuPosition: { x: number; y: number } = { x: 0, y: 0 };
  @Output() selectMultipleTreatments = new EventEmitter<string[]>();
  @Output() closeMenu = new EventEmitter<void>();
  @ViewChild('searchInput') searchInput!: ElementRef;
  selectedTreatments: { [key: string]: boolean } = {};
  dragging = false;
  dragStart: { x: number; y: number } = { x: 0, y: 0 };
  menuStart: { x: number; y: number } = { x: 0, y: 0 };

  treatments = [
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
    'Tratamiento'
  ];

  search = '';

  get filteredTreatments() {
    return this.treatments.filter(
      (treatment) =>
        treatment.toLowerCase().includes(this.search.toLowerCase()) &&
        !this.selectedTreatments[treatment]
    );
  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
    setTimeout(() => {
      let rect = this.contextMenu.nativeElement.getBoundingClientRect();
      let menuWidth = rect.width;
      let menuHeight = rect.height;

      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      if (this.contextMenuPosition.x + menuWidth > windowWidth) {
        this.contextMenuPosition.x = windowWidth - menuWidth;
      }
      if (this.contextMenuPosition.y + menuHeight > windowHeight) {
        this.contextMenuPosition.y = windowHeight - menuHeight;
      }
    });
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'Enter') {
      event.preventDefault();
      if (this.filteredTreatments.length > 0) {
        this.search = this.filteredTreatments[0];
        if (event.key === 'Enter') {
          this.onSelect(this.search);
        }
      }
    }
  }

  onSelect(treatment: string) {
    this.selectedTreatments[treatment] = true;
    this.search = '';
    this.emitSelectedTreatments();
  }

  emitSelectedTreatments() {
    const selectedTreatments = Object.keys(this.selectedTreatments).filter(
      (treatment) => this.selectedTreatments[treatment]
    );
    this.selectMultipleTreatments.emit(selectedTreatments);
  }

  setSelectedTreatments(treatments: string[]) {
    this.selectedTreatments = {};

    for (const treatment of treatments) {
      this.selectedTreatments[treatment] = true;
    }
  }

  get selectedTreatmentsArray() {
    return Object.keys(this.selectedTreatments).filter(
      (treatment) => this.selectedTreatments[treatment]
    );
  }

  deselectTreatment(treatment: string) {
    this.selectedTreatments[treatment] = false;
  }

  onMousedown(event: MouseEvent) {
    this.dragging = true;
    this.dragStart = { x: event.clientX, y: event.clientY };
    this.menuStart = { ...this.contextMenuPosition };
  }

  onMousemove(event: MouseEvent) {
    if (!this.dragging) return;
    requestAnimationFrame(() => {
      this.contextMenuPosition.x =
        this.menuStart.x + event.clientX - this.dragStart.x;
      this.contextMenuPosition.y =
        this.menuStart.y + event.clientY - this.dragStart.y;
    });
  }

  onMouseup() {
    this.dragging = false;
  }

  onClose() {
    this.closeMenu.emit();
  }
}
