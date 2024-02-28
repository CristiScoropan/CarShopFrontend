import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  constructor(private router: Router) { }

  changePasswordForm!: FormGroup;

  onCancel() {
    this.router.navigateByUrl('login');
  }

  initChangePassForm() {
    this.changePasswordForm = new FormGroup({
      username: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      newPasswordConfirmation: new FormControl('', Validators.required)
    })
  }
}
