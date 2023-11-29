import { Component, Input } from '@angular/core';
import { ActorHttpResponse } from '../../../../shared/response/credit.http-response';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
})
export class ActorListComponent {
  @Input() actors: ActorHttpResponse[] | null;

  public readonly responsiveOptions = [
    {
      breakpoint: '1600px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1100px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
