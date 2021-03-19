import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsTableComponent } from './meals-table.component';

describe('MealsTableComponent', () => {
  let component: MealsTableComponent;
  let fixture: ComponentFixture<MealsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
