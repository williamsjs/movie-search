import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent }      from './movie-list/movie-list.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'movies',     component: MovieListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
