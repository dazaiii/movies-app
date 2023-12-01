interface ReviewAuthorModel {
  name: string;
  avatar_path: string;
  rating: string;
}

export interface ReviewModel {
  content: string;
  created_at: string;
  author_details: ReviewAuthorModel;
}
