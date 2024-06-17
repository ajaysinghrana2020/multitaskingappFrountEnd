import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizaddComponent } from './quizadd.component';

describe('QuizaddComponent', () => {
  let component: QuizaddComponent;
  let fixture: ComponentFixture<QuizaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
