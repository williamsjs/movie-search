import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {

  constructor (private http: Http) {}
  // private instance variable to hold base url
  private moviesUrl = 'http://omdbapi.com?s=';

  getMovies(searchInput: string) : Observable<Object[]>{
    return this.http.get(this.moviesUrl + searchInput)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json().Search)
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'error'));
  }

}
