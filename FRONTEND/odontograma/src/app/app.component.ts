import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoading: boolean;
  title = 'odontograma';
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  ngOnInit() {
    this.isLoading = false;
  }

  constructor() {
    this.isLoading = true;
  }
}
