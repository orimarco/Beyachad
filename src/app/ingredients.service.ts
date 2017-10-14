import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IIngredient } from './ingredients';

@Injectable()
export class IngredientsService {
  private _userurl = 'http://localhost:3000/api/getINgredients';
  constructor(private _http: Http) { }

  get(): Observable<IIngredient[]> {
    return this._http.get(this._userurl)
      .map((response: Response) => <IIngredient[]>response.json())
      .do(data => console.log(JSON.stringify(data)));
  }
}
