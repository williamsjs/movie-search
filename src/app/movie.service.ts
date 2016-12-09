import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MovieService {

  constructor (private http: Http) {}

  private moviesUrl = 'http://omdbapi.com?s=';

  getMovies(searchInput: string) : Observable<Object>{
    console.log("request made");
    return this.http.get(this.moviesUrl + searchInput)
                    .map((res:Response) => res.json().Search)
                    .catch((error:any) => Observable.throw(error.json().error || 'error'));
  }

}
