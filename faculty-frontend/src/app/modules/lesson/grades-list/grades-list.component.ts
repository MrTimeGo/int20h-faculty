import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrl: './grades-list.component.scss',
})
export class GradesListComponent {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  taskId = this.activatedRoute.snapshot.params['taskId'];

  task$: Observable<> = of([])
}
