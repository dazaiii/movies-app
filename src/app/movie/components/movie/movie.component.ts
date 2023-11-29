import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DetailedMovieHttpResponse } from '../../../../shared/response/movie.http-response';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnChanges {
  @Input() movie: DetailedMovieHttpResponse | null;

  imageSource: string;
  backgroundSource: string;
  runtime: { hours: number; minutes: number };

  ngOnChanges(): void {
    if (this.movie) {
      this.imageSource = environment.posterPath + this.movie.poster_path;
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
