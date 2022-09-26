import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./views/pages/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./views/pages/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'candidates',
    loadChildren: () =>
      import('./views/pages/candidates/candidates.module').then(
        (m) => m.CandidatesModule
      ),
  },
  {
    path: 'job-requisitions',
    loadChildren: () =>
      import('./views/pages/job-requisitions/job-requisitions.module').then(
        (m) => m.JobRequisitionsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
