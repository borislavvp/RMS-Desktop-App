import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersStatusFilteringComponent } from './orders-status-filtering.component';

describe('OrdersStatusFilteringComponent', () => {
  let component: OrdersStatusFilteringComponent;
  let fixture: ComponentFixture<OrdersStatusFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersStatusFilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersStatusFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
