import {
  Component,
  Input,
  ElementRef,
  ViewChildren,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MenuContextualUIComponent } from '../menu-contextual/menuContextual.component';
import { OdontogramaService } from '../../../services/odontograma.service';

@Component({
  selector: 'app-ui-odontograma-geometrico',
  templateUrl: './geometrico.component.html',
  styleUrls: ['./geometrico.component.css'],
})
export class OdontogramaGeometricoUIComponent {
  @Input() edadCategoria!: string;
  @ViewChildren('contextMenu') contextMenu!: QueryList<ElementRef>;
  @ViewChild(MenuContextualUIComponent)
  menuComponent!: MenuContextualUIComponent;
  private shouldCallOnPartSelected = false;

  selectedDiente: number = 0;
  selectedPart: string = '';
  contextMenuPosition = { x: 0, y: 0 };
  selectedTreatmentsRecord: { [key: string]: { [key: string]: string[] } } = {};

  ngAfterViewChecked() {
    if (this.shouldCallOnPartSelected && this.menuComponent) {
      this.onPartSelected(String(this.selectedDiente), this.selectedPart);
      this.shouldCallOnPartSelected = false;
    }
  }

  logToothPart(diente: number, part: string, event: MouseEvent) {
    this.selectedDiente = diente;
    this.selectedPart = part;
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    this.shouldCallOnPartSelected = true;
  }

  constructor(private odontogramaService: OdontogramaService) {}

  onSelectMultipleTreatments(treatments: string[]) {
    if (!this.selectedTreatmentsRecord[this.selectedDiente]) {
      this.selectedTreatmentsRecord[this.selectedDiente] = {};
    }
    this.selectedTreatmentsRecord[this.selectedDiente][this.selectedPart] =
      treatments;

    for (let part in this.selectedTreatmentsRecord[this.selectedDiente]) {
      if (
        this.selectedTreatmentsRecord[this.selectedDiente][part].length === 0
      ) {
        delete this.selectedTreatmentsRecord[this.selectedDiente][part];
      }
    }
    if (
      Object.keys(this.selectedTreatmentsRecord[this.selectedDiente]).length ===
      0
    ) {
      delete this.selectedTreatmentsRecord[this.selectedDiente];
    }

    console.log('Odontograma: ', this.selectedTreatmentsRecord);
    this.odontogramaService.changeOdontograma(this.selectedTreatmentsRecord);
  }

  closeMenu() {
    this.selectedDiente = 0;
    this.selectedPart = '';
  }

  onPartSelected(diente: string, part: string) {
    this.selectedDiente = Number(diente);
    this.selectedPart = part;

    const previouslySelectedTreatments =
      this.selectedTreatmentsRecord[diente]?.[part];

    if (previouslySelectedTreatments) {
      console.log(diente, part + ': ', previouslySelectedTreatments);
    }

    if (this.menuComponent) {
      Promise.resolve().then(() => {
        this.menuComponent.setSelectedTreatments(
          previouslySelectedTreatments || []
        );
      });
    } else {
      console.error('menuComponent no está definido');
    }
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
