import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalUIComponent {
  title: string = 'Mensaje';
  content: string = '';
  isOpen: boolean = false;
  type: 'success' | 'error' | 'confirm' | 'warning' | 'info' = 'info';

  @Output() onClose = new EventEmitter<boolean>();
  @Output() onConfirm = new EventEmitter<void>();

  confirm() {
    this.onConfirm.emit();
    this.close(true);
  }

  open(
    title: string,
    content: string,
    type: 'success' | 'error' | 'confirm' | 'warning' | 'info' = 'info'
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.title = title;
      this.content = content;
      this.type = type;
      this.isOpen = true;

      this.onClose.subscribe((result) => {
        resolve(result);
      });
    });
  }

  close(result: boolean = false) {
    this.isOpen = false;
    this.onClose.emit(result);
  }
}
