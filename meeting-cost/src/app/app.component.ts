import { Component } from '@angular/core';
import { NavLink } from 'components-lib/lib/nav-bar/nav-link';

@Component({
  selector: 'mcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Meeting Cost Calculator';
  navLinks: NavLink[] = [{ title: 'Home', route: '/home' }, { title: 'About', route: '/about' }];
}
