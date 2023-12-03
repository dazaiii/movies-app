import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ActorDetailsModel,
  MovieCreditsModel,
} from 'src/shared/models/actor-details.model';
import {
  actorDetailsFactory,
  movieCreditsFactory,
} from 'src/shared/models/factory/actor-details.factory';
import {
  ActorDetailsHttpResponse,
  Cast,
  Crew,
  MovieCreditsHttpResponse,
} from 'src/shared/response/actor-details.http-response';

@Injectable({
  providedIn: 'root',
})
export class ActorHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getActorById(id: number): Observable<ActorDetailsModel> {
    return this.httpClient
      .get<ActorDetailsHttpResponse>(`${environment.apiUrl}/person/${id}`)
      .pipe(
        map((actor: ActorDetailsHttpResponse) => actorDetailsFactory(actor)),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }

  getActorMovieCredits(id: number): Observable<MovieCreditsModel[]> {
    return this.httpClient
      .get<MovieCreditsHttpResponse>(
        `${environment.apiUrl}/person/${id}/movie_credits`
      )
      .pipe(
        map((movieCredits) => movieCredits.cast),
        map((movieCredits: Cast[]) =>
          movieCredits.map((movie) => movieCreditsFactory(movie))
        ),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }
}
