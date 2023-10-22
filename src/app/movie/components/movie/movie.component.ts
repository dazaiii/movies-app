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

  ngOnChanges(): void {
    if (this.movie) {
      this.imageSource = environment.posterPath + this.movie.poster_path;
    }
  }

  roundAverage(average: number): number {
    average *= 10;
    average = Math.round(average);
    average /= 10;
    return average;
  }
}
