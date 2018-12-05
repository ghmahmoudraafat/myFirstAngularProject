import { Component, OnInit,Input,Output ,EventEmitter} from "@angular/core";

import $ from "jquery";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  @Input() CurrentRatingValue: string;
  @Output() newRatingValue:EventEmitter<number> = new EventEmitter<number>() ;

  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
   // console.log(this.CurrentRatingValue);

    $("input[value='" + this.CurrentRatingValue + "']").prop("checked", true);
  }


  getRatingValue(event: any): void {
    //console.log(event.target.value);
    this.newRatingValue.emit(event.target.value);
  }
}
