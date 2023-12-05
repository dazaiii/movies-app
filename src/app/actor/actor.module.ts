import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ImageComponent } from 'src/shared/components/image/image.component';
import { ActorPageComponent } from './pages/actor/actor.page';
import { ActorRoutingModule } from './actor-routing.module';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActorMovieCreditsComponent } from './components/actor-movie-credits/actor-movie-credits.component';
import { ActorMovieCreditComponent } from './components/actor-movie-credit/actor-movie-credit.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RoundNumberPipe } from 'src/shared/pipes/round-number.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    ActorPageComponent,
    ActorDetailsComponent,
    ActorMovieCreditsComponent,
    ActorMovieCreditComponent,
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    CardModule,
    ScrollTopModule,
    ImageComponent,
    TranslateModule.forChild(),
    RatingModule,
    FormsModule,
    RoundNumberPipe,
    ScrollingModule,
  ],
})
export class ActorModule {}
