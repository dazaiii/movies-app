import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, map } from 'rxjs';
import { PaginatedResponse } from '../../shared/types/paginated.response';
import { ReviewHttpResponse } from '../../shared/response/review.http-response';
import { reviewFactory } from 'src/shared/models/factory/review.factory';
import { ReviewModel } from 'src/shared/models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getReviewsByMovieId(
    movieId: number,
    page = 1
  ): Observable<PaginatedResponse<ReviewModel>> {
    const params = new HttpParams({ fromObject: { page } });

    return this.httpClient
      .get<PaginatedResponse<ReviewHttpResponse>>(
        `${environment.apiUrl}/movie/${movieId}/reviews`,
        { params }
      )
      .pipe(
        map((reviews: PaginatedResponse<ReviewHttpResponse>) => ({
          ...reviews,
          results: reviews.results.map(reviewFactory),
        })),
        catchError((error) => {
          console.log(console.error());
          throw error;
        })
      );
  }
}
