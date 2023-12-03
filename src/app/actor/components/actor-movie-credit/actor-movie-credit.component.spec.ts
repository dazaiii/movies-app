import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorMovieCreditComponent } from './actor-movie-credit.component';

describe('ActorMovieCreditComponent', () => {
  let component: ActorMovieCreditComponent;
  let fixture: ComponentFixture<ActorMovieCreditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorMovieCreditComponent]
    });
    fixture = TestBed.createComponent(ActorMovieCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
