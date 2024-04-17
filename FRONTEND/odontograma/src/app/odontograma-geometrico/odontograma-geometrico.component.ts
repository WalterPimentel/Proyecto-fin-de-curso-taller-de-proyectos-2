import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-odontograma-geometrico',
  templateUrl: './odontograma-geometrico.component.html',
  styleUrls: ['./odontograma-geometrico.component.css']
})
export class OdontogramaGeometricoComponent {
  private colorDefault = '#ccc'; // Color de relleno predeterminado
  private colorActual = this.colorDefault;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    // Obtén todos los elementos path con la clase "pintable"
    const paths = this.el.nativeElement.querySelectorAll('.st0');

    // Itera sobre cada elemento path y agrega un evento de clic
    paths.forEach((path: HTMLElement) => {
      this.renderer.listen(path, 'click', () => {
        // Cambia el color de relleno
        this.colorActual = this.colorActual === this.colorDefault ? '#ff0000' : this.colorDefault;

        // Aplica el color
        this.renderer.setStyle(path, 'fill', this.colorActual);
      });
    });
  }
}

