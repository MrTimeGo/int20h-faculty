import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class NavItemComponent implements OnInit {
  @Input() navItemConfig?: { iconName: string; name: string; path: string };

  route = inject(ActivatedRoute);
  active = false;

  ngOnInit(): void {
    this.active = this.route.children.some((c) =>
      c.snapshot.url.some((u) => u.path === this.navItemConfig!.path)
    );
  }
}
