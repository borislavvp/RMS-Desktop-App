import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMealFormComponent } from './update-meal-form.component';

describe('UpdateMealFormComponent', () => {
  let component: UpdateMealFormComponent;
  let fixture: ComponentFixture<UpdateMealFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMealFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
