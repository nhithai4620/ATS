import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterPinComponent } from './views/pages/enter-pin/enter-pin.component';
import { ForgotPasswordComponent } from './views/pages/forgot-password/forgot-password.component';
import { LoginComponent } from './views/pages/login/login.component';
import { ResetPasswordComponent } from './views/pages/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: LoginComponent,
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./views/pages/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'enter-pin',
    component: EnterPinComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
