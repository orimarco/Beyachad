import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManagerComponent } from './manager.component';
import { ManagerStatusComponent } from './status.component';
import { ManagerBuylistComponent } from './buylist.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, NgbModule, TabsModule.forRoot(), HttpModule],
    declarations: [ManagerComponent, ManagerStatusComponent, ManagerBuylistComponent],
    bootstrap: [ManagerComponent],
    exports: [ManagerComponent]
})
export class ManagerModule { }
