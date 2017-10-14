import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IUser } from '../users';

@Injectable()
export class UsersService {
  private _userurl = 'http://www.json-generator.com/api/json/get/cekPwPZSmq?indent=2';
  constructor(private _http: Http) { }

  getusers(): Observable<IUser[]> {
    return this._http.get(this._userurl)
      .map((response: Response) => <IUser[]>response.json())
      .do(data => console.log(JSON.stringify(data)));
  }
}
