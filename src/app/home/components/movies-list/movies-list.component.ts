import { Component, Input } from '@angular/core';
import { MovieModel } from 'src/shared/models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() movies: MovieModel[] | null;
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

  trackByMovie(index: number, movie: MovieModel): number {
    return movie.id;
  }
}
