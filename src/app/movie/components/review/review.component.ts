import { Component, Input } from '@angular/core';
import { ReviewHttpResponse } from '../../../../shared/response/review.http-response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() review: ReviewHttpResponse;

  imageSource: string;

  ngOnChanges(): void {
    this.imageSource =
      environment.posterPath + this.review.author_details.avatar_path;
  }
}
