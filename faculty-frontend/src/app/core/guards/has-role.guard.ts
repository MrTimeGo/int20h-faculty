import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  return auth.user$.pipe(
    map((user) => user?.['app/roles']?.includes(route.data['role']))
  );
};
