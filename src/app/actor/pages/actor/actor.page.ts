import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { ActorHttpService } from 'src/app/http-services/actor.http-service';
import {
  ActorDetailsModel,
  MovieCreditsModel,
} from 'src/shared/models/actor-details.model';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor.page.html',
  styleUrls: ['./actor.page.scss'],
})
export class ActorPageComponent implements OnInit {
  actor$: Observable<ActorDetailsModel>;
  movieCredits$: Observable<MovieCreditsModel[]>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly actorHttpService: ActorHttpService
  ) {}

  ngOnInit(): void {
    this.getActor();
    this.getActorMovieCredits();
  }

  private getActor() {
    this.actor$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.actorHttpService.getActorById(id);
      })
    );
  }

  private getActorMovieCredits() {
    this.movieCredits$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.actorHttpService.getActorMovieCredits(id);
      }),
      map((movieCredits) => {
        return movieCredits.sort((m1, m2) => {
          return m2.release_date.getFullYear() - m1.release_date.getFullYear();
        });
      }),
      map((movieCredits) =>
        movieCredits.filter(
          (movieCredit) =>
            movieCredit.release_date instanceof Date &&
            isFinite(movieCredit.release_date.getTime())
        )
      )
    );
  }
}
