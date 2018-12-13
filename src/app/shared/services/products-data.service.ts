import { IProduct } from "../interface/iproduct";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsDataService {
  dataURl = "/src/api/products.json";

  constructor(private httpRequest: HttpClient) {

  }

  getData(): Observable<IProduct[]> {
    return this.httpRequest.get<IProduct[]>(this.dataURl);
  }

}
