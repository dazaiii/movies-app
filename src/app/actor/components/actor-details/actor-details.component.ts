import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorDetailsModel } from 'src/shared/models/actor-details.model';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss'],
})
export class ActorDetailsComponent {
  @Input() actor: ActorDetailsModel | null;

  imageSource: string;

  ngOnChanges(): void {
    if (this.actor) {
      this.imageSource = environment.posterPath + this.actor.profile_path;
    }
  }
}
