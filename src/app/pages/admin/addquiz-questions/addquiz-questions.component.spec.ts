import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizQuestionsComponent } from './addquiz-questions.component';

describe('AddquizQuestionsComponent', () => {
  let component: AddquizQuestionsComponent;
  let fixture: ComponentFixture<AddquizQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquizQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddquizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
