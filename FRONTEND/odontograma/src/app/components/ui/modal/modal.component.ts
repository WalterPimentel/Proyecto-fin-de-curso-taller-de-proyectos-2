import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalUIComponent implements OnDestroy {
  title: string = 'Mensaje';
  content: string = '';
  isOpen: boolean = false;
  type: 'success' | 'error' | 'confirm' | 'warning' | 'info' = 'info';

  @Output() onClose = new EventEmitter<boolean>();
  @Output() onConfirm = new EventEmitter<void>();

  private closeSubscription: Subscription;

  constructor() {
    this.closeSubscription = this.onClose.subscribe(() => {
      this.isOpen = false;
      if (this.closeSubscription) {
        this.closeSubscription.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

  confirm() {
    this.onConfirm.emit();
    this.close(true);
  }

  open(
    title: string,
    content: string,
    type: 'success' | 'error' | 'confirm' | 'warning' | 'info' = 'info'
  ): Promise<boolean> {
    return new Promise((resolve) => {
      this.title = title;
      this.content = content;
      this.type = type;
      this.isOpen = true;

      const subscription = this.onClose.subscribe((result) => {
        resolve(result);
        subscription.unsubscribe();
      });
    });
  }

  close(result: boolean = false) {
    this.isOpen = false;
    this.onClose.emit(result);
  }
}
