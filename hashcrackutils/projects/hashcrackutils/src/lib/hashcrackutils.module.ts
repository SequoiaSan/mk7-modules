import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { hashcrackutilsComponent } from './components/hashcrackutils.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: hashcrackutilsComponent }
];

@NgModule({
    declarations: [hashcrackutilsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [hashcrackutilsComponent]
})
export class hashcrackutilsModule { }
