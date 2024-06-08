import { Component } from '@angular/core';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrl: './dietas.component.css'
})
export class DietasComponent {
  survey = {
    sexo: '',
    edad: null,
    peso: null,
    altura: null,
    grasaCorporal: null
  };

  onSubmit() {
    
  }
}
