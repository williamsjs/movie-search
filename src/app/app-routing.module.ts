import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent }      from './movie-list/movie-list.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieResolve } from './movie-detail/movie.resolve';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'movies/:id',
    component: MovieDetailComponent,
    resolve: {
      movie: MovieResolve
    }
  },
  { path: 'movies', component: MovieListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
