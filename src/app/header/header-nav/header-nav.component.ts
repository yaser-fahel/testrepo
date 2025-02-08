import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Section } from 'src/app/models/section.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit{

  sections: Section[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getSections().subscribe((sections) => {
      this.sections = sections;
    })
  }

  // Method to encode the product nameg
  encodeProductName(name: string): string {
    return name.replace(/ /g, '-'); // Replaces spaces with hyphens
  }
  
}
