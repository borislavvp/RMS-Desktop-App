import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealImageComponent } from './add-meal-image.component';

describe('AddMealImageComponent', () => {
  let component: AddMealImageComponent;
  let fixture: ComponentFixture<AddMealImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMealImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMealImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
