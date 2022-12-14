import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AuthInterceptorProvider } from 'app/http/auth';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, NgbModule, LazyLoadImageModule],
  providers: [AuthInterceptorProvider],
  exports: [LazyLoadImageModule],
})
export class SharedModule {}
