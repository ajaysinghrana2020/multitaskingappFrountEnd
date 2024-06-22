import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizQuestionsComponent } from './viewquiz-questions.component';

describe('ViewquizQuestionsComponent', () => {
  let component: ViewquizQuestionsComponent;
  let fixture: ComponentFixture<ViewquizQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquizQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewquizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
