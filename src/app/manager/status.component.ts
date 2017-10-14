import { Component } from '@angular/core';
import { ManagerComponent } from 'app/manager/manager.component';

@Component({
  selector: 'status',
  templateUrl: 'status.component.html',
})
export class ManagerStatusComponent {
  general = {
    evening: 3,
    morning: 1,
    general: 3,
    paid: 1

  };
  x = 7;

  ngOnInit(){
    console.log(ManagerComponent.iusers);

  }
}
