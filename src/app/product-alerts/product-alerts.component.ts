import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  
//The product alert component takes a product as input from the product list. With that input, it shows or hides the Notify Me button, based on the price of the product. The Phone XL price is over $700, so the Notify Me button appears on that product.

// The @Input() decorator indicates that the property value //passes in from the component's parent, ProductListComponent
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}
}
