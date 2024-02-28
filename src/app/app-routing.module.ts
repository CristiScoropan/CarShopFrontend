import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [{ path: 'login', component: LoginPageComponent },
{path: 'admin', component: AdminPageComponent},
{path: 'customer', component: CustomerPageComponent},
{path: 'change-password', component: ChangePasswordComponent},
{ path: '', redirectTo: '/login', pathMatch: 'full' }, 
{ path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
