import { User } from '@auth0/auth0-angular';
import { Observable, filter, map } from 'rxjs';

export const getRole = (user$: Observable<User>) => {
  return user$.pipe(
    filter((user) => !!user),
    map(
      (user) =>
        Object.entries(user!)
          .filter(([k, _]) => k.endsWith('roles'))
          .map(([_, v]) => v)[0]
    )
  );
};
