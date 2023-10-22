interface AuthorDetails {
  name: string;
  user_name: string;
  avatar_path: string;
  rating: string;
}

export interface ReviewHttpResponse {
  id: string;
  author: string;
  author_details: AuthorDetails;
  content: string;
  url: string;
  created_at: string;
  updated_at: string;
}
