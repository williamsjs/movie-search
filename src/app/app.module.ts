import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTextboxComponent } from './search-textbox/search-textbox.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MovieService } from './movie.service';
import { MovieResolve } from './movie-detail/movie.resolve';

@NgModule({
  declarations: [
    AppComponent,
    SearchTextboxComponent,
    MovieListComponent,
    MovieDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    MovieService,
    MovieResolve
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
