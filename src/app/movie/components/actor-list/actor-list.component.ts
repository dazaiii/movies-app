import { Component, Input } from '@angular/core';
import { ActorHttpResponse } from '../../../../shared/response/credit.http-response';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
})
export class ActorListComponent {
  @Input() actors: ActorHttpResponse[] | null;

  trackByActor(index: number, actor: ActorHttpResponse) {
    return actor.id;
  }
}
