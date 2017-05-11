import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.pug'
})
export class ProfileComponent {
  @Input() profileInfo: any;
  @Input() isSearching: boolean;

  constructor() { }

  clearInfo() {
    this.profileInfo = null;
  }
}
