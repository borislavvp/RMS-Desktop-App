import { OrdersStatusFilterPipe } from './orders-status-filter.pipe';

describe('OrdersStatusFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdersStatusFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
