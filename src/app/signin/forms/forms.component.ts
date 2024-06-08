
import {Component} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge} from 'rxjs';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgIf } from '@angular/common';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule,MatButtonModule,CommonModule,NgIf],
})
export class FormsComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  user=new FormControl('', [Validators.required]);
  pass=new FormControl('', [Validators.required,Validators.minLength(12)]);
  confirmPass=new FormControl('', [Validators.required]);
  registerForm!: FormGroup;
  errorMessage = '';

  constructor(private fb:FormBuilder,public dialog: MatDialog) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

      merge(this.user.statusChanges, this.user.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.userErrorMessage())

      this.registerForm = this.fb.group({
        user:['', [Validators.required]],
        email:['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.minLength(12)]],
        confirmPass: ['', Validators.required]
      }, { validator: this.passwordMatchValidator });
  }
  get password() {
    return this.registerForm.get('pass');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }


  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
    }
}
  errorMessage4='';
  passwordMatchValidator(form: FormGroup) {

    return form.get('pass')?.value === form.get('confirmPass')?.value
      ? null : { 'mismatch': true };
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

  errorMessage3='';
  passErrorMessage(){
    if (this.pass.hasError('required')) {
      this.errorMessage3 = 'Debes llenar este campo';}
      else if (this.pass.hasError('minlength')) {
        this.errorMessage3 = 'La contraseña debe tener al menos 12 caracteres';
      }
    else {
      this.errorMessage3 = '';
    }
  }


  passErrorMessage2(){
    if (this.pass.hasError('required')) {
      this.errorMessage4 = 'Debes llenar este campo';}
    else {
      this.errorMessage4 = '';
    }
  }
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  hide2 = true;
  clickEvent2(event: MouseEvent) {
  this.hide2 = !this.hide2;
  event.stopPropagation();}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-component.html',
  styleUrl: 'forms.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog { }
