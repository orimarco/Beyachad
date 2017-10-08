import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ManagerModule } from './manager/manager.module'
import { UserModule } from './user/user.module'

import { ManagerComponent } from './manager/manager.component'

@NgModule({
  imports: [ManagerModule, UserModule, BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }