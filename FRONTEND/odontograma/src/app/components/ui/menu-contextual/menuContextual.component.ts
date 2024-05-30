import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-ui-menu-contextual',
  templateUrl: './menuContextual.component.html',
  styleUrls: ['./menuContextual.component.css'],
})
export class MenuContextualUIComponent {
  @Input() diente: number | null = null;
  @Input() part: string = '';
  @Input() contextMenuPosition: { x: number; y: number } = { x: 0, y: 0 };
  @Output() selectTreatment = new EventEmitter<string>();
  @Output() closeMenu = new EventEmitter<void>();
  @ViewChild('searchInput') searchInput!: ElementRef;

  treatments = [
    'Tratamiento 1',
    'agmarra',
    'dgamarra',
    'Tratamiento 4',
    'Tratamiento 5',
    'Tratamiento 6asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
    'Tratamiento 7',
    'Tratamiento 8',
    'Jhordan'
  ];

  search = '';

  get filteredTreatments() {
    return this.treatments.filter((treatment) =>
      treatment.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
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
    this.selectTreatment.emit(treatment);
  }
  onClose() {
    this.closeMenu.emit();
  }
}
