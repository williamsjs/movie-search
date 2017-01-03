import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  providers: [MovieService]
})

export class MovieDetailComponent implements OnInit {
  private movie: Object;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.movie = this.route.snapshot.data['movie'];
  }

  goBack(): void {
    this.location.back();
  }

}
