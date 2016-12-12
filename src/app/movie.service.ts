import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MovieService {

  constructor (private http: Http) {}

  private moviesUrl = 'http://omdbapi.com?s=';
  private movieDetailsUrl = 'http://omdbapi.com?i=';

  getMovies(searchInput: string) : Observable<Object[]>{
    console.log("request made");
    return this.http.get(this.moviesUrl + searchInput)
                    .map((res:Response) => res.json().Search)
                    .catch((error:any) => Observable.throw(error.json().error || 'error'));
  }

  getMovieDetails(movieID: string) : Observable<Object> {
    return this.http.get(this.movieDetailsUrl + movieID + '&tomatoes=true') // add rotten tomatoes param
                    .map((r: Response) => r.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'error'));
  }

}
