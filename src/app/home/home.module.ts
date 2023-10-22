import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home/home.page';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [HomePage, MovieCardComponent, MoviesListComponent],
  imports: [CommonModule, HomeRoutingModule, CardModule, CarouselModule],
})
export class HomeModule {}
