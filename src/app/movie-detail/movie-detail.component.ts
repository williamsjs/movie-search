import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  private movie: Object;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.movieService.getMovieDetails(params['id']))
        .subscribe((movie: Object) => this.movie = movie)
  }

}
