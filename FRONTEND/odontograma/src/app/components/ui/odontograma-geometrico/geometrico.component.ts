import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-odontograma-geometrico',
  templateUrl: './geometrico.component.html',
  styleUrls: ['./geometrico.component.css'],
})
export class OdontogramaGeometricoUIComponent {

  @Input() edadCategoria!: string;

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
