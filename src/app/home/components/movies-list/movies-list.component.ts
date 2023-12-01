import { Component, Input } from '@angular/core';
import { responsiveOptions } from 'src/shared/constant/responsive-options';
import { MovieModel } from 'src/shared/models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() movies: MovieModel[] | null;
  @Input() title: string;

  public readonly responsiveOptions = responsiveOptions;

  trackByMovie(index: number, movie: MovieModel): number {
    return movie.id;
  }
}
