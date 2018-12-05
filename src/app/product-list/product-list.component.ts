import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/shared/interface/iproduct";
import { ProductsDataService } from "src/app/shared/services/products-data.service";
import { ProductsInCartService } from "src/app/shared/services/products-in-cart.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  isDisabled: boolean;
  largeImageRating: string;
  largeImageDescription: string;
  largeImageTitle: string;
  largeImageSrc: string;
  modalProduct: IProduct[];
  miniCartProduct: IProduct[];

  //listFilter :string ='cart';
  filterdProducts: IProduct[];
  products: IProduct[];
  _listFilter: string;

  set listFilter(value: string) {
    this._listFilter = value;
    this.filterdProducts = this.listFilter
      ? this.performFilter(this._listFilter)
      : this.products;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  constructor(
    private productService: ProductsDataService,
    private miniCart: ProductsInCartService
  ) {
    this.products = this.productService.getData();
    this.listFilter = "";
    //
  }
  ngOnInit() {}

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter(
      product =>
        product.productName.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1
    );
  }

  showModal(selected): void {
    this.modalProduct = selected;
  }
  addToMiniCart(selected): void {
    event.stopPropagation();

    this.miniCart.items.push(selected);
    this.miniCart.setItemsPrice(selected.price) ;


    //this.miniCartProduct = selected;
  }
}
