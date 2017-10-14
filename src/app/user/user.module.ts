import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, Ng2AutoCompleteModule, NgbModule],
    declarations: [UserComponent],
    bootstrap: [UserComponent],
    exports: [UserComponent]
})
export class UserModule { }
