import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartMiniComponent } from './shoping-cart-mini.component';

describe('ShopingCartMiniComponent', () => {
  let component: ShopingCartMiniComponent;
  let fixture: ComponentFixture<ShopingCartMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
