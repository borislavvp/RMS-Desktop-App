import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMealImageComponent } from './update-meal-image.component';

describe('UpdateMealImageComponent', () => {
  let component: UpdateMealImageComponent;
  let fixture: ComponentFixture<UpdateMealImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMealImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMealImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
