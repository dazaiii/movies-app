import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorDetailsModel } from 'src/shared/models/actor-details.model';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorDetailsComponent {
  @Input() actor: ActorDetailsModel | null;

  imageSource: string | null;

  ngOnChanges(): void {
    if (this.actor) {
      this.imageSource = this.actor.profile_path
        ? environment.posterPath + this.actor.profile_path
        : null;
    }
  }
}
