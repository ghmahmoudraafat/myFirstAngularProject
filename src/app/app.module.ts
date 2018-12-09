import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ConvertToSpacesPipe } from "./shared/pipes/convertToSpaces";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ModalComponent } from "./modal/modal.component";
import { RatingComponent } from "./shared/rating/rating.component";
import { NavHeaderComponent } from "./shared/nav-header/nav-header.component";
import { ShopingCartMiniComponent } from "./shopping-cart/shoping-cart-mini/shoping-cart-mini.component";

import { ShopingCartFullDetailsComponent } from "./shopping-cart/shoping-cart-full-details/shoping-cart-full-details.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    ShoppingCartComponent,
    ModalComponent,
    RatingComponent,
    NavHeaderComponent,
    ShopingCartMiniComponent,
    ShopingCartFullDetailsComponent
  ],
  imports: [BrowserModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
