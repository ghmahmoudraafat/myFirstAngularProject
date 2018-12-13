import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private rout : ActivatedRoute) {
    console.log(this.rout.snapshot.paramMap)
  }

  ngOnInit() {
  }

}
