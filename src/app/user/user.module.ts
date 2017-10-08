import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [UserComponent],
    bootstrap: [UserComponent]
})
export class UserModule { }