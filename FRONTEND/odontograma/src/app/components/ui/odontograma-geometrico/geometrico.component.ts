import {
  Component,
  Input,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-ui-odontograma-geometrico',
  templateUrl: './geometrico.component.html',
  styleUrls: ['./geometrico.component.css'],
})
export class OdontogramaGeometricoUIComponent {
  @Input() edadCategoria!: string;
  @ViewChildren('contextMenu') contextMenu!: QueryList<ElementRef>;

  selectedDiente: number = 0;
  selectedPart: string = '';
  contextMenuPosition = { x: 0, y: 0 };

  logToothPart(diente: number, part: string, event: MouseEvent) {
    this.selectedDiente = diente;
    this.selectedPart = part;
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
  }

  onSelectMultipleTreatments(treatments: string[]) {
    console.log(
      `Diente: ${this.selectedDiente}, Parte: ${this.selectedPart}, Tratamientos: ${treatments}`
    );
    this.selectedDiente = 0;
    this.selectedPart = '';
  }

  closeMenu() {
    this.selectedDiente = 0;
    this.selectedPart = '';
  }

  dientes = Array(8)
    .fill(0)
    .map((x, i) => i + 11)
    .reverse()
    .concat(
      Array(8)
        .fill(0)
        .map((x, i) => i + 21)
    )
    .concat(
      Array(8)
        .fill(0)
        .map((x, i) => i + 41)
        .reverse()
    )
    .concat(
      Array(8)
        .fill(0)
        .map((x, i) => i + 31)
    )
    .concat(
      Array(5)
        .fill(0)
        .map((x, i) => i + 51)
        .reverse()
    )
    .concat(
      Array(5)
        .fill(0)
        .map((x, i) => i + 61)
    )
    .concat(
      Array(5)
        .fill(0)
        .map((x, i) => i + 81)
        .reverse()
    )
    .concat(
      Array(5)
        .fill(0)
        .map((x, i) => i + 71)
    );
}
