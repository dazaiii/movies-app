import { Component, Input } from '@angular/core';
import { ReviewHttpResponse } from '../../../../shared/response/review.http-response';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() review: ReviewHttpResponse;
}
