import { Component } from '@angular/core';
import { MovieHttpService } from 'src/app/http-services/movie.http-service';
import { Observable, map } from 'rxjs';
import { MovieModel } from 'src/shared/models/movie.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nowPlayingMovies$: Observable<MovieModel[]>;
  topRatedMovies$: Observable<MovieModel[]>;

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
