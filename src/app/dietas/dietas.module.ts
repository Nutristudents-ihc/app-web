import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    DietasRoutingModule

  ],
  exports: [
    DietasComponent,
    TiposComidaComponent
  ]
})
export class DietasModule { }
