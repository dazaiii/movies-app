import { ReviewHttpResponse } from 'src/shared/response/review.http-response';
import { ReviewModel } from '../review.model';

export const reviewFactory = (
  reviewResponse: ReviewHttpResponse
): ReviewModel => {
  return {
    content: reviewResponse.content,
    created_at: reviewResponse.created_at,
    author_details: {
      name:
        reviewResponse.author_details.name ||
        reviewResponse.author_details.username,
      rating: reviewResponse.author_details.rating,
      avatar_path: reviewResponse.author_details.avatar_path,
    },
  };
};
