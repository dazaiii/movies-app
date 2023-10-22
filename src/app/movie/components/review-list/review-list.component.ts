import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatedResponse } from '../../../../shared/types/paginated.response';
import { ReviewHttpResponse } from '../../../../shared/response/review.http-response';
// import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent {
  @Input() paginatedReviews: PaginatedResponse<ReviewHttpResponse> | null;
  @Output() pageChanged = new EventEmitter<number>();

  handlePageEvent(event: any): void {
    this.pageChanged.emit(event.pageIndex + 1);
  }
}
