import { ActorHttpResponse } from 'src/shared/response/credit.http-response';
import { ActorModel } from '../actor.model';

export const actorFactory = (actorResponse: ActorHttpResponse): ActorModel => {
  return {
    name: actorResponse.name,
    character: actorResponse.character,
    profile_path: actorResponse.profile_path,
    id: actorResponse.id,
  };
};
