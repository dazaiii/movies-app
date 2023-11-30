import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DetailedMovieHttpResponse } from '../../../../shared/response/movie.http-response';
import { environment } from '../../../../environments/environment';
import { DetailedMovieModel } from 'src/shared/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnChanges {
  @Input() movie: DetailedMovieModel | null;

  imageSource: string;
  backgroundSource: string;
  runtime: { hours: number; minutes: number };

  ngOnChanges(): void {
    if (this.movie) {
      this.imageSource = environment.posterPath + this.movie.posterPath;
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

  roundRating(average: number): number {
    return Math.round(average);
  }

  roundAverage(average: number): number {
    average *= 10;
    average = Math.round(average);
    average /= 10;
    return average;
  }
}
