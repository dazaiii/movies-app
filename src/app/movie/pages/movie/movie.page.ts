import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PaginatedResponse } from '../../../../shared/types/paginated.response';
import { ReviewHttpService } from '../../../http-services/review.http-service';
import { CreditHttpService } from '../../../http-services/credit.http-service';
import { MovieHttpService } from 'src/app/http-services/movie.http-service';
import { DetailedMovieModel } from 'src/shared/models/movie.model';
import { ActorModel } from 'src/shared/models/actor.model';
import { ReviewModel } from 'src/shared/models/review.model';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePageComponent {
  movie$: Observable<DetailedMovieModel>;
  reviews$: Observable<PaginatedResponse<ReviewModel>>;
  actors$: Observable<ActorModel[]>;

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
