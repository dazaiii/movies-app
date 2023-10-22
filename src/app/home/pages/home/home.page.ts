import { Component } from '@angular/core';
import { MovieHttpService } from '../../../http-services/movie.http-service';
import { Observable, map } from 'rxjs';
import { MovieHttpResponse } from '../../../../shared/response/movie.http-response';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nowPlayingMovies$: Observable<MovieHttpResponse[]>;
  topRatedMovies$: Observable<MovieHttpResponse[]>;

  constructor(private readonly movieHttpService: MovieHttpService) {
    this.getNowPlaying();
    this.getTopRated();
  }

  getNowPlaying() {
    this.nowPlayingMovies$ = this.movieHttpService
      .getNowPlaying()
      .pipe(map((paginatedMovies) => paginatedMovies.results));
  }

  getTopRated() {
    this.topRatedMovies$ = this.movieHttpService
      .getTopRated()
      .pipe(map((paginatedMovies) => paginatedMovies.results));
  }
}
