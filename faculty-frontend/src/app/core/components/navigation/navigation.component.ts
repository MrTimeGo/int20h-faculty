import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map, take } from 'rxjs';
import { getRole } from '../../../shared/components/utils/roles';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  auth = inject(AuthService);
  role = getRole(this.auth.user$.pipe(map((user) => user!)));
}
