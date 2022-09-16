import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

// import { OverlayModule } from '@angular/cdk/overlay'
// import { CdkMenuModule } from '@angular/cdk/menu'
import { SidenavModule } from '../../base/sidenav/sidenav.module';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    SidenavModule
  ],
  bootstrap: [HomeComponent]
})

export class HomeModule { }
