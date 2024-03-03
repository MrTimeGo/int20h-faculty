import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  auth = inject(AuthService);

  navItems = [
    {
      path: 'students',
      icon: 'group',
      name: 'Students',
      roles: ['teacher'],
    },
    {
      path: 'statistics',
      icon: 'insert_chart',
      name: 'Statistics',
      roles: ['teacher'],
    },
    {
      path: 'lessons',
      icon: 'featured_play_list',
      name: 'Lessons',
      roles: ['teacher', 'student'],
    },
    {
      path: 'announcements',
      icon: 'notifications',
      name: 'Announcements',
      roles: ['teacher'],
    },
  ];

  constructor() {}
}
