import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logopath = '/assets/images/github-logo.png';

  constructor() { }
}
