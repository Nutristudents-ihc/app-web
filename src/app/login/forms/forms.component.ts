
import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge} from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule,RouterModule,ReactiveFormsModule],
})
export class FormsComponent {
  user=new FormControl('', [Validators.required]);
  pass=new FormControl('', [Validators.required]);

  errorMessage = '';

  constructor() {
      merge(this.user.statusChanges, this.user.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.userErrorMessage())

  }
  private readonly fb=inject(FormBuilder);
  formGroup = this.fb.group({
    user: ['', [Validators.required]],
    pass: ['', [Validators.required]]
  });

  userErrorMessage(){
    if (this.user.hasError('required')) {
      this.errorMessage = 'Debes llenar este campo';}
    else {
      this.errorMessage = '';
    }
  }

  errorMessage2 = '';
  passErrorMessage(){
    if (this.pass.hasError('required')) {
      this.errorMessage2 = 'Debes llenar este campo';}
    else {
      this.errorMessage2 = '';
    }
  }
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
