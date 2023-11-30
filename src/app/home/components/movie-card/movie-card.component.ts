import { Component, Input, OnInit } from '@angular/core';
import { MovieHttpResponse } from '../../../../shared/response/movie.http-response';
import { environment } from '../../../../environments/environment';
import { MovieModel } from 'src/shared/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieModel;

  imageSource: string;

  ngOnInit(): void {
    this.imageSource = environment.posterPath + this.movie.posterPath;
  }

  roundAverage(average: number): number {
    average *= 10;
    average = Math.round(average);
    average /= 10;
    return average;
  }
}
