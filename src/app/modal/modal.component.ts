import { Component, OnInit, Input } from "@angular/core";
import { IProduct } from "src/app/shared/interface/iproduct";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input() clickedProduct: IProduct;
  newComment: string;

  addComment(): void {
    if (this.newComment) {
      this.clickedProduct.comments.push(this.newComment);
      this.newComment = "";
    }
  }
  constructor() {}

  ngOnInit() {}

  onRatingChange(str:number):void{
    this.clickedProduct.starRating = str;
    console.log(str);
  }
}
