import { ReviewHttpResponse } from 'src/shared/response/review.http-response';
import { ReviewModel } from '../review.model';

export const reviewFactory = (
  reviewResponse: ReviewHttpResponse
): ReviewModel => {
  return {
    content: reviewResponse.content,
    created_at: reviewResponse.created_at,
    author_details: reviewResponse.author_details,
  };
};
