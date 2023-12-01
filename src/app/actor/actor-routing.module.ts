import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ActorPageComponent } from './pages/actor/actor.page';

const routes: Route[] = [
  {
    path: '',
    component: ActorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorRoutingModule {}
