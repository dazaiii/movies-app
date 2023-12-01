import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReviewModel } from 'src/shared/models/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() review: ReviewModel;

  imageSource: string;

  ngOnChanges(): void {
    this.imageSource =
      environment.posterPath + this.review.author_details.avatar_path;
  }
}
