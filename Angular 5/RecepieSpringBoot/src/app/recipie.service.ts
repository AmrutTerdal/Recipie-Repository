import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from'@angular/common/http'
import {Observable} from'rxjs/Observable';

import {Recipie} from './models/Recipie';


const httpOptions = {
  headers:new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable()
export class RecipieService {

  getUrl:string = 'http://localhost:8080/user/all';

  saveUrl:string = 'http://localhost:8080/user/add';


  constructor(private http:HttpClient) { }

  // without subscribe in the component save dont happen

  saveRecipie(recipie){
    return this.http.post(this.saveUrl,recipie,httpOptions);
  }



  getRecipie():Observable<Recipie[]>{
    return this.http.get<Recipie[]>(this.getUrl);
  }

}
