import {
  ActorDetailsHttpResponse,
  Cast,
} from 'src/shared/response/actor-details.http-response';
import { ActorDetailsModel, MovieCreditsModel } from '../actor-details.model';

export const actorDetailsFactory = (
  actorDetailsResponse: ActorDetailsHttpResponse
): ActorDetailsModel => {
  return {
    biography: actorDetailsResponse.biography,
    birthday: actorDetailsResponse.birthday,
    deathday: actorDetailsResponse.deathday,
    homepage: actorDetailsResponse.homepage,
    name: actorDetailsResponse.name,
    profile_path: actorDetailsResponse.profile_path,
  };
};

export const movieCreditsFactory = (castResponse: Cast): MovieCreditsModel => {
  return {
    id: castResponse.id,
    poster_path: castResponse.poster_path,
    release_date: new Date(castResponse.release_date),
    title: castResponse.title,
    vote_average: castResponse.vote_average,
    vote_count: castResponse.vote_count,
    character: castResponse.character,
  };
};
