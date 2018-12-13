import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/Router";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ConvertToSpacesPipe } from "./shared/pipes/convertToSpaces";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ModalComponent } from "./modal/modal.component";
import { RatingComponent } from "./shared/rating/rating.component";
import { NavHeaderComponent } from "./shared/nav-header/nav-header.component";
import { ShopingCartMiniComponent } from "./shopping-cart/shoping-cart-mini/shoping-cart-mini.component";

import { ShopingCartFullDetailsComponent } from "./shopping-cart/shoping-cart-full-details/shoping-cart-full-details.component";
import { HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from "./welcome.component";


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
    ShopingCartFullDetailsComponent,
    WelcomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "products", component: ProductListComponent },
      { path: "products/:id", component: ProductDetailsComponent },
      { path: "**", redirectTo: "welcome" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
