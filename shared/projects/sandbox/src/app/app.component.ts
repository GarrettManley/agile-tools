import { Component } from '@angular/core';
import { NavLink } from 'projects/components-lib/src/lib/nav-bar/nav-link';

@Component({
  selector: 'ssb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sandbox';
  navBarLinks: NavLink[] = [
    { title: 'Link 1', route: '/link1' },
    { title: 'Link 2', route: '/link2' },
    { title: 'Link 3', route: '/link3' },
  ];
}
