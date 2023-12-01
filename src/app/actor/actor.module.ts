import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ImageComponent } from 'src/shared/components/image/image.component';
import { ActorPageComponent } from './pages/actor/actor.page';
import { ActorRoutingModule } from './actor-routing.module';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';

@NgModule({
  declarations: [ActorPageComponent, ActorDetailsComponent],
  imports: [
    CommonModule,
    ActorRoutingModule,
    CardModule,
    ScrollTopModule,
    ImageComponent,
  ],
})
export class ActorModule {}
