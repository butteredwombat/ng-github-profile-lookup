import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MainRoutingModule
    ],
    declarations: [MainComponent],
    providers: []
})
export class MainModule { }
