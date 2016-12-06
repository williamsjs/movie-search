import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { URLSearchParams, Jsonp } from '@angular/http';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {

  constructor (private http: Http) {}
  // private instance variable to hold base url
  private moviesUrl = 'http://omdbapi.com?s=';

  getMovies(searchInput: string) : Observable<Movie[]>{
    return this.http.get(this.moviesUrl + searchInput)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json().Search)
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'error'));
  }

  // export class MovieService {
  //   constructor(private jsonp: Jsonp) {}
  //
  //   search (term: string) {
  //     var search = new URLSearchParams()
  //     search.set('action', 'opensearch');
  //     search.set('search', term);
  //     search.set('format', 'json');
  //     return this.jsonp
  //                 .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
  //                 .toPromise()
  //                 .then((response) => response.json()[1]);
  //   }
  // }
}
