import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
  @Input() movies: Object[];

  constructor(
    private router: Router,
    private movieService: MovieService,
    private location: PlatformLocation
  ) {
      location.onPopState(() => {
        console.log('pressed back!');
      });
    }

  ngOnInit() {}

  gotoDetail(selectedMovieID): void {
    this.router.navigate(['./detail', selectedMovieID])
  }
}
