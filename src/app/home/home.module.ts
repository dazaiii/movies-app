import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home/home.page';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { AboutComponent } from './pages/about/about.component';
import { ButtonModule } from 'primeng/button';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
  declarations: [
    HomePage,
    MovieCardComponent,
    MoviesListComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    CarouselModule,
    ButtonModule,
    ScrollTopModule,
  ],
})
export class HomeModule {}
