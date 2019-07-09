import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from './nav-link';

@Component({
  selector: 'atc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() title: string;
  @Input() links: NavLink[];

  constructor() {}

  ngOnInit() {}
}
