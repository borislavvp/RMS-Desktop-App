import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealPageComponent } from './add-meal-page.component';

describe('AddMealPageComponent', () => {
  let component: AddMealPageComponent;
  let fixture: ComponentFixture<AddMealPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMealPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
