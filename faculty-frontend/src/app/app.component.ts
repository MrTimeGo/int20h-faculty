import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatestWith, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  auth = inject(AuthService);
  spinner = inject(NgxSpinnerService);

  constructor() {
    this.auth.isLoading$
    .pipe(
      combineLatestWith(this.auth.user$)
    )
    .subscribe(([loading, user]) => {
      loading ? this.spinner.show() : this.spinner.hide();
      if (!user) {
        this.auth.loginWithRedirect();
      }
    });
  }
}
