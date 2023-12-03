export interface ActorDetailsModel {
  biography: string;
  birthday: string;
  deathday: string | null;
  homepage: string;
  name: string;
  profile_path: string;
}

export interface MovieCreditsModel {
  id: number;
  poster_path: string;
  release_date: Date;
  title: string;
  vote_average: number;
  vote_count: number;
  character: string;
}
