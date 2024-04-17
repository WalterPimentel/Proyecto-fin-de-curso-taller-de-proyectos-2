import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnamnesisService } from './services/anamnesis.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-anamnesis-new',
  templateUrl: './anamnesis-new.component.html',
  styleUrls: ['./anamnesis-new.component.css'],
})
export class AnamnesisNewComponent {
  public patientForm: FormGroup = this.fb.group({
    nombres: [''],
    edad: [''],
    apellidos: [''],
    sexo: [''],
    lugar: [''],
    nacimiento: [''],
    estado_civil: [''],
    celular: [0],
    residencia: [''],
    grado_instruccion: [''],
    ocupacion: [''],
    domicilio: [''],
    nombre_comunicarse: [''],
    ocupacion_comunicarse: [''],
    domicilio_comunicarse: [''],
    parentesco: [''],
    acompañante: [''],
    telefono_comunicarse: [''],
    //Acompañante
    nombreCom: [''],
    ocupacionCom: [''],
    domicilioCom: [''],
    parentescoCom: [''],
    telefonoCom: [0],
    correoCom: [''],
  });

  constructor(
    private fb: FormBuilder,
    private anamnesisService: AnamnesisService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  onSave(): void {
    if (this.patientForm.invalid) return;
    const formPatientData = this.patientForm.value;

    const apiPatientData = {
      dni: '1234567899', // Reemplaza con el valor adecuado
      nombre: formPatientData.nombres,
      apellidoMaterno: 'apellido', // Reemplaza con el valor adecuado
      apellidoPaterno: formPatientData.apellidos, // Reemplaza con el valor adecuado
      religion: 'musulmana', // Reemplaza con el valor adecuado
      raza: 'ario', // Reemplaza con el valor adecuado
      sexo: formPatientData.sexo,
      domicilio: formPatientData.domicilio,
      residencia: formPatientData.residencia,
      ocupacion: formPatientData.ocupacion,
      lugar: formPatientData.lugar,
      correo: 'lucasMagnota@gmail.com', // Reemplaza con el valor adecuado
      telefono: formPatientData.celular, // Reemplaza con el valor adecuado
      fechaNacimiento: formPatientData.nacimiento,
      gradoInstruccion: formPatientData.grado_instruccion,
      estadoCivil: formPatientData.estado_civil,
    };

    this.anamnesisService.savePatientData(apiPatientData).subscribe(
      (patientRes) => {
        console.log('API response (Paciente):', patientRes);

        // Obtener el id del paciente recién creado
        const getIdPaciente = patientRes.id; // Asegúrate de que la respuesta tenga un campo 'id' o ajusta según la estructura de tu API

        // Construir los datos del acompañante con el id del paciente
        const apiCompanionData = {
          idPaciente: getIdPaciente,
          nombre: formPatientData.nombreCom,
          parentesco: formPatientData.parentescoCom,
          telefono: formPatientData.telefonoCom,
          correo: formPatientData.correoCom,
          domicilio: formPatientData.domicilioCom,
          ocupacion: formPatientData.ocupacionCom,
        };

        // Realizar la solicitud para guardar los datos del acompañante
        this.anamnesisService.saveCompanionData(apiCompanionData).subscribe(
          (companionRes) => {
            console.log('API response (Acompañante):', companionRes);

            alert(
              'Registro exitoso del paciente y acompañante, continue con el siguiente paso dando clic al botón Siguiente'
            );
            //this.patientForm.reset({});

            // Redirige a la nueva vista y pasa el ID como parámetro
            //this.sharedService.setIdHistoriaClinica(getIdPaciente);
            this.anamnesisService.createAnamnesis().subscribe(
              (anamnesisRes) => {
                // Manejar la respuesta exitosa aquí
                console.log('Anamnesis creada con éxito', anamnesisRes);
                const getIdAnamnesis = anamnesisRes.id;
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD
                const formattedTime = currentDate.toTimeString().split(' ')[0]; // Formato HH:mm:ss

                const apiClinicHistoryData = {
                  idUsuario: 1,
                  idPaciente: getIdPaciente,
                  idAnamnesis: getIdAnamnesis,
                  fecha: formattedDate,
                  hora: formattedTime,
                  ectoscopia: '',
                };

                this.anamnesisService
                  .createClinicHistory(apiClinicHistoryData)
                  .subscribe(
                    (clinicHistoryRes) => {
                      console.log(
                        'Historia Clinica creada con éxito',
                        clinicHistoryRes
                      );
                    },
                    (error) => {
                      console.error('Error al crear historia clinica', error);
                    }
                  );
              },
              (error) => {
                // Manejar el error aquí
                console.error('Error al crear anamnesis', error);
              }
            );
            //this.router.navigate(['/consultoria']);
          },
          (companionError) => {
            console.error(
              'Error al enviar datos a la API Acompañantes:',
              companionError
            );
          }
        );
      },
      (patientError) => {
        console.error('Error al enviar datos a la API Paciente:', patientError);
      }
    );
  }
}
