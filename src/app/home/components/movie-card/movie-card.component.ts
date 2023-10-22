import { Component, Input, OnInit } from '@angular/core';
import { MovieHttpResponse } from '../../../../shared/response/movie.http-response';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieHttpResponse;

  imageSource: string;

  ngOnInit(): void {
    this.imageSource = environment.posterPath + this.movie.poster_path;
  }
}
