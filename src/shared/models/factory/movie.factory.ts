import {
  DetailedMovieHttpResponse,
  MovieHttpResponse,
} from 'src/shared/response/movie.http-response';
import { DetailedMovieModel, MovieModel } from '../movie.model';

export const movieFactory = (movieResponse: MovieHttpResponse): MovieModel => {
  return {
    id: movieResponse.id,
    overview: movieResponse.overview,
    posterPath: movieResponse.poster_path,
    title: movieResponse.title,
    vote_average: movieResponse.vote_average,
  };
};

export const detailedMovieFactory = (
  movieResponse: DetailedMovieHttpResponse
): DetailedMovieModel => {
  return {
    id: movieResponse.id,
    overview: movieResponse.overview,
    posterPath: movieResponse.poster_path,
    title: movieResponse.title,
    vote_average: movieResponse.vote_average,
    budget: movieResponse.budget,
    genres: movieResponse.genres,
    homepage: movieResponse.homepage,
    production_companies: movieResponse.production_companies,
    production_countries: movieResponse.production_countries,
    runtime: movieResponse.runtime,
    tagline: movieResponse.tagline,
    backdrop_path: movieResponse.backdrop_path,
    original_title: movieResponse.original_title,
    release_date: movieResponse.release_date,
    vote_count: movieResponse.vote_count,
  };
};
