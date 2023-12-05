import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { responsiveOptions } from 'src/shared/constant/responsive-options';
import { ActorModel } from 'src/shared/models/actor.model';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorListComponent {
  @Input() actors: ActorModel[] | null;

  public readonly responsiveOptions = responsiveOptions;
}
