import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  auth = inject(AuthService);
  spinner = inject(NgxSpinnerService);

  constructor() {
    this.auth.isLoading$.subscribe((loading) => {
      loading ? this.spinner.show() : this.spinner.hide();
    });
  }
}
