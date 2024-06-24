import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionpageComponent } from './instructionpage.component';

describe('InstructionpageComponent', () => {
  let component: InstructionpageComponent;
  let fixture: ComponentFixture<InstructionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
