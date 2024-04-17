import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-motivo-consulta-new',
  templateUrl: './motivo-consulta-new.component.html',
  styleUrls: ['./motivo-consulta-new.component.css']
})
export class MotivoConsultaNewComponent {
  pacienteId!: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.pacienteId = this.sharedService.getIdHistoriaClinica();
  }

}
