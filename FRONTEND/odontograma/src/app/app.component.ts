import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'odontograma';
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
