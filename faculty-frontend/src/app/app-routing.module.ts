import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { hasRoleGuard } from './core/guards/has-role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lessons',
    pathMatch: 'full',
  },
  {
    path: 'lessons',
    //canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/lesson/lesson.module').then((m) => m.LessonModule),
  },
  {
    path: 'students',
    canActivate: [AuthGuard, hasRoleGuard],
    data: {
      role: 'teacher',
    },
    loadChildren: () =>
      import('./modules/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
