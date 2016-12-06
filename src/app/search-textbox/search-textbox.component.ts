import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-search-textbox',
  templateUrl: './search-textbox.component.html',
  styleUrls: ['./search-textbox.component.css'],
  providers: [ MovieService]
})
export class SearchTextboxComponent implements OnInit {

  public movies;
  public title;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    //this.loadMovies();
  }

  searchMovie(title: string) : void {
    this.title = title;
  }

  loadMovies(title: string) {
    this.movieService.getMovies(title)
      .subscribe(
        movies => this.movies = movies,
        err => {
          console.log(err);
        });
  }

}
