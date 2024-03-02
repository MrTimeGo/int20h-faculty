import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, NavItemComponent],
  imports: [
    CommonModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
  ],
  exports: [NavigationComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
})
export class CoreModule {}
