import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/data/customer.data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  user !: User
  constructor(private router: Router){}
  goToPage(){
    if(this.user.role == "admin")
      this.router.navigateByUrl('admin')
    else
      this.router.navigateByUrl('customer')
  }

  goToChangePassword(){
    this.router.navigateByUrl("change-password");
  }
  loginForm !: FormGroup 
}
