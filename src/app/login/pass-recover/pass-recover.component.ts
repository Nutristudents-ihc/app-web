import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import {
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-pass-recover',
  templateUrl: './pass-recover.component.html',
  styleUrl: './pass-recover.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, RouterModule, MatDialogModule,  MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
})
export class PassRecoverComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  private readonly formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });


  errorMessage = '';

  constructor(public dialog: MatDialog) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());


  }

  updateErrorMessage() {
    const emailErrors = this.email.errors;
    if (emailErrors) {
      if (emailErrors['required']) {
        this.errorMessage = 'Debes llenar este campo';
      } else if (emailErrors['email']) {
        this.errorMessage = 'Ingresa un email válido';
      } else {
        this.errorMessage = '';
      }
    } else {
      this.errorMessage = '';
    }
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }


}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-component.html',
  styleUrl: './pass-recover.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog { }
