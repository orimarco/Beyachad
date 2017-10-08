import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManagerComponent } from './manager.component';
import { ManagerStatus } from './status.component';
import { ManagerBuylist } from './buylist.component';
import { RouterModule, Routes } from '@angular/router';

const managerRoutes: Routes = [
    { path: 'status', component: ManagerStatus },
    { path: 'buylist', component: ManagerBuylist },
];

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(managerRoutes)],
    declarations: [ManagerComponent, ManagerStatus, ManagerBuylist],
    bootstrap: [ManagerComponent]
})
export class ManagerModule { }