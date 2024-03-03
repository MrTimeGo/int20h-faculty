import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../core/services/students.service';
import { Observable, debounceTime, switchMap, tap } from 'rxjs';
import { StudentDetailed } from '../../../core/models/student';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-detailed',
  templateUrl: './student-detailed.component.html',
  styleUrl: './student-detailed.component.scss',
})
export class StudentDetailedComponent implements OnInit {
  route = inject(ActivatedRoute);
  studentService = inject(StudentsService);

  student$?: Observable<StudentDetailed>;

  infoControl = new FormControl();

  ngOnInit(): void {
    this.student$ = this.route.paramMap.pipe(
      switchMap((map) =>
        this.studentService.getStudentDetailed(map.get('id')!)
      ),
      tap((student) => {
        this.infoControl.patchValue(student.additionalInfo);
      })
    );

    this.infoControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value) =>
          this.studentService.updateAdditionalInfo(
            this.route.snapshot.paramMap.get('id')!,
            value
          )
        )
      )
      .subscribe();
  }
}
