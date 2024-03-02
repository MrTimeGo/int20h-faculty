import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
