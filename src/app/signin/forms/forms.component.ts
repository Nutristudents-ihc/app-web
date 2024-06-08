
import {Component} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge} from 'rxjs';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
})
export class FormsComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  user=new FormControl('', [Validators.required]);

  errorMessage = '';

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

      merge(this.user.statusChanges, this.user.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.userErrorMessage())

  }

  userErrorMessage(){
    if (this.user.hasError('required')) {
      this.errorMessage = 'Debes llenar este campo';}
    else {
      this.errorMessage = '';
    }
  }
  errorMessage2='';
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage2 = 'Debes llenar este campo';
    } else if (this.email.hasError('email')) {
      this.errorMessage2 = 'Ingresa un email válido';
    } else {
      this.errorMessage2 = '';
    }
  }
}
