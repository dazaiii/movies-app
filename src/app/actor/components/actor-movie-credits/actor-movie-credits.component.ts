import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieCreditsModel } from 'src/shared/models/actor-details.model';

@Component({
  selector: 'app-actor-movie-credits',
  templateUrl: './actor-movie-credits.component.html',
  styleUrls: ['./actor-movie-credits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorMovieCreditsComponent {
  @Input() movieCredits: MovieCreditsModel[] | null;
}
