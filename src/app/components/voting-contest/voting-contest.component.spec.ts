import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingContestComponent } from './voting-contest.component';

describe('VotingContestComponent', () => {
  let component: VotingContestComponent;
  let fixture: ComponentFixture<VotingContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingContestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
