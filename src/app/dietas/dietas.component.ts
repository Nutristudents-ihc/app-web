import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.css']
})
export class DietasComponent implements OnInit {
  personalInfoForm!: FormGroup;
  comidaForm!: FormGroup;
  tiposComida = [
    { name: 'Carnes blancas', selected: false },
    { name: 'Carnes rojas', selected: false },
    { name: 'Tubérculos', selected: false },
    { name: 'Frutos secos', selected: false },
    { name: 'Embutidos', selected: false },
    { name: 'Pescado', selected: false }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalInfoForm = this._formBuilder.group({
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      grasaCorporal: ['']
    });

    this.comidaForm = this._formBuilder.group({
      comidas: [this.tiposComida]
    });
  }

  onToggleSelect(tipo: any): void {
    tipo.selected = !tipo.selected;
  }

  onSubmit(): void {
    console.log('Formulario enviado', {
      personalInfo: this.personalInfoForm.value,
      tiposComida: this.tiposComida.filter(t => t.selected)
    });
  }
}