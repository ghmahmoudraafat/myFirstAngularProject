import { Component, OnInit, OnChanges, DoCheck } from "@angular/core";
import { ProductsInCartService } from "src/app/shared/services/products-in-cart.service";
import { IProduct } from "src/app/shared/interface/iproduct";

@Component({
  selector: "app-shoping-cart-mini",
  templateUrl: "./shoping-cart-mini.component.html",
  styleUrls: ["./shoping-cart-mini.component.css"]
})
export class ShopingCartMiniComponent implements DoCheck {
  items: IProduct[];
  totalItems: number;
  cost: number;
  constructor(private miniCart: ProductsInCartService) {
    this.items = this.miniCart.items;
  }

  ngDoCheck() {

    this.cost = this.miniCart.getTotalCost();
    //debugger;
    //this.miniCart.items.
  }
}
