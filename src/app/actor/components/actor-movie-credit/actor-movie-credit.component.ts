import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieCreditsModel } from 'src/shared/models/actor-details.model';

@Component({
  selector: 'app-actor-movie-credit',
  templateUrl: './actor-movie-credit.component.html',
  styleUrls: ['./actor-movie-credit.component.scss'],
})
export class ActorMovieCreditComponent {
  @Input() movieCredit: MovieCreditsModel;

  imageSource: string | null;

  ngOnChanges(): void {
    if (this.movieCredit) {
      this.imageSource = this.movieCredit.poster_path
        ? environment.posterPath + this.movieCredit.poster_path
        : null;
    }
  }
}
