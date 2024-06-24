import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { DietasComponent } from './dietas.component';
import { DietasRoutingModule } from './dietas-routing.module';
import { TiposComidaComponent } from './tipos-comida.component';

@NgModule({
  declarations: [
    DietasComponent,
    TiposComidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    DietasRoutingModule
  ],
  exports: [
    DietasComponent,
    TiposComidaComponent
  ]
})
export class DietasModule { }