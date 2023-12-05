import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PaginatedResponse } from '../../../../shared/types/paginated.response';
import { ReviewModel } from 'src/shared/models/review.model';
// import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListComponent {
  @Input() paginatedReviews: PaginatedResponse<ReviewModel> | null;
  @Output() pageChanged = new EventEmitter<number>();

  handlePageEvent(event: any): void {
    this.pageChanged.emit(event.pageIndex + 1);
  }
}
