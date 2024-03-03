import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { WorkService } from '../../../core/services/work.service';
import { GradesService } from '../../../core/services/grades.service';
import { SubjectsService } from '../../../core/services/subjects.service';
import { StudentsService } from '../../../core/services/students.service';
import { StudentShort } from '../../../core/models/student';
import { GradeShort } from '../../../core/models/grade';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrl: './grades-list.component.scss',
})
export class GradesListComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  workId = this.activatedRoute.snapshot.params['workId'];
  subjectId = this.activatedRoute.snapshot.params['id'];

  workService = inject(WorkService);
  gradeService = inject(GradesService);
  studentsService = inject(StudentsService);

  work$ = this.workService.getWorkShortById(this.workId);
  students$?: Observable<StudentShort[]>;

  grades: Map<string, number | null> = new Map();

  ngOnInit(): void {
    this.students$ = this.studentsService.getStudentsShort().pipe(
      tap((students) => {
        this.gradeService
          .getGradesForWorkByStudentIds(
            this.workId,
            students.map((s) => s.id)
          )
          .subscribe((grades) => {
            grades.reduce((map, grade) => {
              map.set(grade.studentId, grade.value);
              return map;
            }, this.grades);
          });
      })
    );
  }

  setGrade(studentId: string, value: number) {
    this.gradeService.setGrade(this.workId, studentId, value).subscribe();
  }
}
