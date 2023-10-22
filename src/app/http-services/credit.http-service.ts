import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import {
  ActorHttpResponse,
  CreditHttpResponse,
} from '../../shared/response/credit.http-response';

@Injectable({
  providedIn: 'root',
})
export class CreditHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getActorsByMovieId(movieId: number): Observable<ActorHttpResponse[]> {
    return this.httpClient
      .get<CreditHttpResponse>(`${environment.apiUrl}/movie/${movieId}/credits`)
      .pipe(
        map((response) => response.cast),
        map((cast) =>
          cast.filter((person) => person.known_for_department === 'Acting')
        ),
        map((actors) => actors.sort((a, b) => a.order - b.order))
      );
  }
}
