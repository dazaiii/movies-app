import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorMovieCreditsComponent } from './actor-movie-credits.component';

describe('ActorMovieCreditsComponent', () => {
  let component: ActorMovieCreditsComponent;
  let fixture: ComponentFixture<ActorMovieCreditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorMovieCreditsComponent]
    });
    fixture = TestBed.createComponent(ActorMovieCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
