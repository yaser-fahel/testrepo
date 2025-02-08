import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  product$: Observable<Product | undefined> | null = null;  // Observable for product
  private routeSub: Subscription | undefined;  // Subscription for the route params


  constructor(
    private route: ActivatedRoute,  // To access route parameters
    private productService: ProductService  // To fetch product data
  ) { }

  ngOnInit(): void {
    // Subscribe to route parameters to detect changes
    this.routeSub = this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      const productName = params.get('name');
      if (productId && productName) {
        const id = Number(productId);  // Convert string to number
        if (!isNaN(id)) {
          this.product$ = this.productService.getProductById(id);  // Fetch product using the service
        }
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the route subscription when the component is destroyed to avoid memory leaks
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
