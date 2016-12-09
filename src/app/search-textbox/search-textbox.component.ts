import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search-textbox',
  templateUrl: './search-textbox.component.html',
  styleUrls: ['./search-textbox.component.scss'],
  providers: [MovieService]
})
export class SearchTextboxComponent implements OnInit {

  private movies;
  private title = new FormControl();

  constructor(private movieService: MovieService) {
    this.title.valueChanges
             .debounceTime(400)
             .distinctUntilChanged()
             .flatMap(title => this.movieService.getMovies(title))
             .subscribe(movies => this.movies = movies); // Search contains the array of movies from the json response
  }

  ngOnInit() {
    //this.loadMovies();
  }

}
