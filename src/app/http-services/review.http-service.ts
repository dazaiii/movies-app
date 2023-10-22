import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError } from 'rxjs';
import { PaginatedResponse } from '../../shared/types/paginated.response';
import { ReviewHttpResponse } from '../../shared/response/review.http-response';

@Injectable({
  providedIn: 'root',
})
export class ReviewHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getReviewsByMovieId(
    movieId: number,
    page = 1
  ): Observable<PaginatedResponse<ReviewHttpResponse>> {
    const params = new HttpParams({ fromObject: { page } });

    return this.httpClient
      .get<PaginatedResponse<ReviewHttpResponse>>(
        `${environment.apiUrl}/movie/${movieId}/reviews`,
        { params }
      )
      .pipe(
        catchError((error) => {
          console.log(console.error());
          throw error;
        })
      );
  }
}
