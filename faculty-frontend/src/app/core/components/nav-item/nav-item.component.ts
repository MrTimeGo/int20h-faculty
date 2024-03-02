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
    this.route.url.subscribe((urls) => {
      this.active = urls.map((u) => u.path).includes(this.navItemConfig!.path);
    });
  }
}
