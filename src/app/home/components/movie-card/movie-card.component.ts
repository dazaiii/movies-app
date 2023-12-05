import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MovieModel } from 'src/shared/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieModel;

  imageSource: string | null;

  ngOnInit(): void {
    this.imageSource = this.movie.posterPath
      ? environment.posterPath + this.movie.posterPath
      : null;
  }

  roundAverage(average: number): number {
    average *= 10;
    average = Math.round(average);
    average /= 10;
    return average;
  }
}
