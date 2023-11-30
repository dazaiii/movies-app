import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PaginatedResponse } from '../../shared/types/paginated.response';
import { Observable, catchError, map } from 'rxjs';
import {
  DetailedMovieHttpResponse,
  MovieHttpResponse,
} from '../../shared/response/movie.http-response';
import {
  detailedMovieFactory,
  movieFactory,
} from 'src/shared/models/factory/movie.factory';
import { DetailedMovieModel, MovieModel } from 'src/shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getNowPlaying(page = 1): Observable<PaginatedResponse<MovieModel>> {
    const params = new HttpParams({
      fromObject: {
        page,
      },
    });

    return this.httpClient
      .get<PaginatedResponse<MovieHttpResponse>>(
        `${environment.apiUrl}/movie/now_playing`,
        {
          params,
        }
      )
      .pipe(
        map((movies: PaginatedResponse<MovieHttpResponse>) => ({
          ...movies,
          results: movies.results.map(movieFactory),
        })),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }

  getTopRated(page = 1): Observable<PaginatedResponse<MovieModel>> {
    const params = new HttpParams({
      fromObject: {
        page,
      },
    });

    return this.httpClient
      .get<PaginatedResponse<MovieHttpResponse>>(
        `${environment.apiUrl}/movie/top_rated`,
        {
          params,
        }
      )
      .pipe(
        map((movies: PaginatedResponse<MovieHttpResponse>) => ({
          ...movies,
          results: movies.results.map(movieFactory),
        })),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }

  getById(id: number): Observable<DetailedMovieModel> {
    return this.httpClient
      .get<DetailedMovieHttpResponse>(`${environment.apiUrl}/movie/${id}`)
      .pipe(
        map((movie) => {
          return detailedMovieFactory(movie);
        }),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }
}
