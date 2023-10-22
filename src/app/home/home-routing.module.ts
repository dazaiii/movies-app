import { Route, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';

const routes: Route[] = [{ path: '', component: HomePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
