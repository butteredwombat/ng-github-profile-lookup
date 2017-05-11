import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.pug'
})
export class MainComponent implements OnInit {
  isSearching = false;
  profileInfo: any;

  constructor(private githubService: GithubService) { }

  onSearch(profileName) {
    this.isSearching = true;

    this.githubService.getProfile(profileName)
    .then(profileInfo => {
      this.profileInfo = profileInfo;
      this.isSearching = false;
    })
    .catch(err => {
      // TODO: add a popup modal or something
      console.error(err);
      this.isSearching = false;
    });
  }

  ngOnInit() {
  }

}
