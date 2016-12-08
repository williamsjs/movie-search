import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-textbox',
  templateUrl: './search-textbox.component.html',
  styleUrls: ['./search-textbox.component.css'],
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
           .subscribe(movies => this.movies = movies);
  }

  ngOnInit() {
    //this.loadMovies();
  }

}
