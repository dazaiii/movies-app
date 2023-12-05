import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DetailedMovieModel } from 'src/shared/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnChanges {
  @Input() movie: DetailedMovieModel | null;

  imageSource: string | null;
  backgroundSource: string;
  runtime: { hours: number; minutes: number };

  ngOnChanges(): void {
    if (this.movie) {
      this.imageSource = this.movie.posterPath
        ? environment.posterPath + this.movie.posterPath
        : null;
      this.backgroundSource =
        environment.backdropPath + this.movie.backdrop_path;
      this.runtime = this.toHoursAndMinutes(this.movie.runtime);
    }
  }

  toHoursAndMinutes(totalMinutes: number): { hours: number; minutes: number } {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }
}
