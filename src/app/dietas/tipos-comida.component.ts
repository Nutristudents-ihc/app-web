import { Component } from '@angular/core';

interface TipoComida {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-tipos-comida',
  templateUrl: './tipos-comida.component.html',
  styleUrl: './tipos-comida.component.css'
})
export class TiposComidaComponent {
  tiposComida = [
    { name: 'Carnes blancas', selected: false },
    { name: 'Carnes rojas', selected: false },
    { name: 'Tubérculos', selected: false },
    { name: 'Frutos secos', selected: false },
    { name: 'Embutidos', selected: false },
    { name: 'Pescado', selected: false }
  ];

  onToggleSelect(tipo: TipoComida) {
    tipo.selected = !tipo.selected;
  }

  onSubmit() {
   
  }
}
