import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MoviePageComponent } from './pages/movie/movie.page';
import { MovieComponent } from './components/movie/movie.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { CardModule } from 'primeng/card';
import { ReviewComponent } from './components/review/review.component';
import { PaginatorModule } from 'primeng/paginator';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { ActorComponent } from './components/actor/actor.component';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ImageComponent } from 'src/shared/components/image/image.component';

@NgModule({
  declarations: [
    MoviePageComponent,
    MovieComponent,
    ReviewListComponent,
    ReviewComponent,
    ActorListComponent,
    ActorComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    CardModule,
    PaginatorModule,
    RatingModule,
    CarouselModule,
    ScrollTopModule,
    ImageComponent,
  ],
})
export class MovieModule {}
