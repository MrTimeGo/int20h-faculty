import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.cliendId,
      authorizationParams: {
        redirect_uri: window.location.origin,

        audience: environment.apiUrl,
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiUrl}/*`,
            tokenOptions: {
              authorizationParams: {
                audience: environment.apiUrl,
              },
            },
          },
        ],
      },
    }),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
