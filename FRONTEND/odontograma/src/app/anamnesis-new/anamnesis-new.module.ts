import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisNewComponent } from './anamnesis-new.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AnamnesisService } from './services/anamnesis.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AnamnesisNewComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  exports: [AnamnesisNewComponent],
  providers: [AnamnesisService],
})
export class AnamnesisNewModule {}
