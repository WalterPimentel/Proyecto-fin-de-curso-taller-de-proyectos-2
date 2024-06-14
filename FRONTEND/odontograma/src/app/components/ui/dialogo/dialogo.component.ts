import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {
    correo: string = '';
    nombres: string = '';
    telefono: string = '';

    constructor(public dialogRef: MatDialogRef<DialogoComponent>) {}

    aceptarClick() {
      const correoInput = document.getElementById('correo') as HTMLInputElement;
      const nombresInput = document.getElementById('nombres') as HTMLInputElement;
      const telefonoInput = document.getElementById('telefono') as HTMLInputElement;

      console.log('Correo:', correoInput.value);
      console.log('Nombres:', nombresInput.value);
      console.log('Teléfono:', telefonoInput.value);

      // Puedes realizar otras acciones con los datos del formulario, como enviarlos a través de una solicitud HTTP, etc.
      // Si quieres cerrar el diálogo después de hacer algo con los datos, puedes hacerlo así:
      this.dialogRef.close();
    }
}
