import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartFullDetailsComponent } from './shoping-cart-full-details.component';

describe('ShopingCartFullDetailsComponent', () => {
  let component: ShopingCartFullDetailsComponent;
  let fixture: ComponentFixture<ShopingCartFullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartFullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
