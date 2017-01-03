import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MovieService } from '../movie.service';

@Injectable()
export class MovieResolve implements Resolve<any> {

  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.movieService.getMovieDetails(route.params['id']);
  }
}
