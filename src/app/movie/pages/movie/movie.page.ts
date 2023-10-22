import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { MovieHttpService } from '../../../http-services/movie.http-service';
import { ActivatedRoute } from '@angular/router';
import { DetailedMovieHttpResponse } from '../../../../shared/response/movie.http-response';
import { PaginatedResponse } from '../../../../shared/types/paginated.response';
import { ReviewHttpResponse } from '../../../../shared/response/review.http-response';
import { ReviewHttpService } from '../../../http-services/review.http-service';
import { CreditHttpService } from '../../../http-services/credit.http-service';
import { ActorHttpResponse } from '../../../../shared/response/credit.http-response';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePageComponent {
  movie$: Observable<DetailedMovieHttpResponse>;
  reviews$: Observable<PaginatedResponse<ReviewHttpResponse>>;
  actors$: Observable<ActorHttpResponse[]>;

  constructor(
    private readonly movieHttpService: MovieHttpService,
    private readonly reviewHttpService: ReviewHttpService,
    private readonly creditHttpService: CreditHttpService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.getMovie();
    this.getReviews();
    this.getActors();
  }

  reviewPageChanged(page: number) {
    this.getReviews(page);
  }

  private getMovie() {
    this.movie$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.movieHttpService.getById(id);
      })
    );
  }

  private getReviews(page?: number) {
    this.reviews$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return page
          ? this.reviewHttpService.getReviewsByMovieId(id, page)
          : this.reviewHttpService.getReviewsByMovieId(id);
      })
    );
  }

  private getActors() {
    this.actors$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.creditHttpService.getActorsByMovieId(id);
      })
    );
  }
}
