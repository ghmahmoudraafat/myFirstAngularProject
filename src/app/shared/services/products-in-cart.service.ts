import { Injectable } from "@angular/core";
import { IProduct } from "src/app/shared/interface/iproduct";
import { debug } from "util";

@Injectable({
  providedIn: "root"
})
export class ProductsInCartService {
  items: IProduct[] = [];
  totalItems: number;

  totalCost: number = 0;
  // get totalCost() {
  //   return this._totalCost;
  // }
  // set totalCost(value:number) {

  //   this._totalCost += value;
  // }
  constructor() {}
  ngDoCheck() {
    // console.log('');
    // console.log(this.items.length);
  }
  setItemsPrice(price: number): void {
    //debugger;
    this.totalCost += price;
  }
  getTotalCost(): number {
    return this.totalCost;
  }
}
