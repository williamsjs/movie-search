import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTextboxComponent } from './search-textbox/search-textbox.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressBarDirective } from './progress-bar.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchTextboxComponent,
    MovieListComponent,
    MovieDetailComponent,
    DashboardComponent,
    ProgressBarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
