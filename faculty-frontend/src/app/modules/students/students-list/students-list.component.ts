import { Component, OnInit, inject } from '@angular/core';
import { GroupsService } from '../../../core/services/groups.service';
import { StudentsService } from '../../../core/services/students.service';
import { BehaviorSubject, debounceTime, switchMap } from 'rxjs';
import { StudentShort } from '../../../core/models/student';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent implements OnInit {
  groupService = inject(GroupsService);
  studentService = inject(StudentsService);

  groups$ = this.groupService.getAllGroups();

  students$ = new BehaviorSubject<StudentShort[]>([]);

  searchForm = new FormControl('');

  selectedGroups: string[] = [];

  sortByField = 'name';

  ngOnInit(): void {
    this.studentService.getStudentsShort().subscribe((students) => {
      this.students$.next(
        students.sort((a, b) => a.name.localeCompare(b.name))
      );
    });

    this.searchForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.search();
    });
  }

  onCheckboxClicked(group: string) {
    console.log(this.selectedGroups);
    if (this.selectedGroups.includes(group)) {
      this.selectedGroups = this.selectedGroups.filter((g) => g !== group);
    } else {
      this.selectedGroups.push(group);
    }

    this.search();
  }

  sortBy(field: keyof StudentShort) {
    this.sortByField = field;

    this.students$.next(
      this.students$.value.sort((a, b) => a[field].localeCompare(b[field]))
    );
  }

  private search() {
    this.studentService
      .getStudentsShort(this.searchForm.value!, this.selectedGroups)
      .subscribe((students) => {
        this.students$.next(students);
      });
  }
}
