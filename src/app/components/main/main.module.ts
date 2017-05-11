import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProfileComponent } from '../profile/profile.component';

import { GithubService } from '../../services/github.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent,
        SearchBarComponent,
        ProfileComponent
    ],
    providers: [GithubService]
})
export class MainModule { }
