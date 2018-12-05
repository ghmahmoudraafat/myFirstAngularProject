import { TestBed } from '@angular/core/testing';

import { ProductsInCartService } from './products-in-cart.service';

describe('ProductsInCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsInCartService = TestBed.get(ProductsInCartService);
    expect(service).toBeTruthy();
  });
});
