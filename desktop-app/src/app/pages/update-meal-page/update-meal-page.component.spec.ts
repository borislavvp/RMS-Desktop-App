import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMealPageComponent } from './update-meal-page.component';

describe('UpdateMealPageComponent', () => {
  let component: UpdateMealPageComponent;
  let fixture: ComponentFixture<UpdateMealPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMealPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
