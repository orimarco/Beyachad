import { Component } from '@angular/core';
import { IUser } from 'app/users';
import { UsersService } from 'app/manager/users.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-manager',
  providers: [UsersService],
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.styles.css']
})
export class ManagerComponent {
  static iusers: IUser[];
  constructor(private _userService: UsersService) {
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
      this.fetchUsers();

    const setControls = () => {
      const tabs = $('.nav-link'),
        allWells = $('.tab-content');
      allWells.hide();

      tabs.click(function (e) {
        // tslint:disable-next-line:curly
        if ($(this).hasClass('disabled'))
          return;
        e.preventDefault();
        const $target = $('#' + $(this).attr('id') + '-content');
        if (!$target.hasClass('active')) {
          // tabs.closest('li').removeClass('active');
          allWells.removeClass('active');
          $target.addClass('active');
          allWells.hide();
          $target.show();
        }
      });
      $('.tab-content').filter('.active').fadeIn();
    };
    $(document).ready(function () {
      setControls();

    });
  }

    private fetchUsers() {
        this._userService.getusers()
        .subscribe(_ => ManagerComponent.iusers = _);
    }
}
