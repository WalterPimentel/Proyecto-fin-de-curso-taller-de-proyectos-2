import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  @Input() isLoading: boolean = false;
  dots = '';
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.dots = this.dots.length < 3 ? this.dots + '.' : '';
    }, 400);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
