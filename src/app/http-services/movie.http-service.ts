import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PaginatedResponse } from '../../shared/types/paginated.response';
import { Observable, catchError } from 'rxjs';
import {
  DetailedMovieHttpResponse,
  MovieHttpResponse,
} from '../../shared/response/movie.http-response';

@Injectable({
  providedIn: 'root',
})
export class MovieHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getNowPlaying(page = 1): Observable<PaginatedResponse<MovieHttpResponse>> {
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
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }

  getTopRated(page = 1): Observable<PaginatedResponse<MovieHttpResponse>> {
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
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }

  getById(id: number): Observable<DetailedMovieHttpResponse> {
    return this.httpClient
      .get<DetailedMovieHttpResponse>(`${environment.apiUrl}/movie/${id}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }
}
