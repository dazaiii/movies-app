import {
  Genre,
  ProductionCompany,
  ProductionCountry,
} from '../response/movie.http-response';

export interface MovieModel {
  id: number;
  overview: string;
  posterPath: string;
  title: string;
  vote_average: number;
}

export interface DetailedMovieModel extends MovieModel {
  budget: number;
  genres: Genre[];
  homepage: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  runtime: number;
  tagline: string;
  backdrop_path: string;
  original_title: string;
  release_date: string;
  vote_count: number;
}
