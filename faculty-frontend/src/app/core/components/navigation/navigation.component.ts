import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  auth = inject(AuthService);

  constructor() {
    this.auth.user$.subscribe((user) => {
      console.log(user);
    });
  }
}
