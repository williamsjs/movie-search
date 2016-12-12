import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Object[];


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoDetail(selectedMovieID): void {
    this.router.navigate(['./detail', selectedMovieID])
  }
}
