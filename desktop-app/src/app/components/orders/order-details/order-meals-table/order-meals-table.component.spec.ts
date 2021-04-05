import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMealsTableComponent } from './order-meals-table.component';

describe('OrderMealsTableComponent', () => {
  let component: OrderMealsTableComponent;
  let fixture: ComponentFixture<OrderMealsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMealsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
