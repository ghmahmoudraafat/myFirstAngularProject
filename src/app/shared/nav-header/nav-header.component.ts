import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-nav-header",
  templateUrl: "./nav-header.component.html",
  styleUrls: ["./nav-header.component.css"]
})
export class NavHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle("fast");
    });
  }
}
