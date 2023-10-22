import { Component, Input } from '@angular/core';
import { MovieHttpResponse } from '../../../../shared/response/movie.http-response';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() movies: MovieHttpResponse[] | null;
  @Input() title: string;

  public readonly responsiveOptions = [
    {
      breakpoint: '1600px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1100px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  trackByMovie(index: number, movie: MovieHttpResponse): number {
    return movie.id;
  }
}
