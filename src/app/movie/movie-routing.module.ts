import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MoviePageComponent } from './pages/movie/movie.page';

//436270 - this movie has 23 reviews

const routes: Route[] = [
  {
    path: '',
    component: MoviePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
