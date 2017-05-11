import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.pug',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchProfileForm: FormGroup;
  @Output() onSearch = new EventEmitter();

  constructor() { }

  onSubmit() {
    if (this.searchProfileForm.get('profileName').value.length > 0) {
      this.onSearch.emit(this.searchProfileForm.get('profileName').value);
    }
  }

  ngOnInit() {
    this.searchProfileForm = new FormGroup({
      profileName: new FormControl('')
    });
  }
}
