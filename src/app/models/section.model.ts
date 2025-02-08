// src/app/models/section.model.ts
import { Product } from './product.model';  // Import the Product interface

export interface Section {
  id: number;
  name: string;
  products: Product[];  // Use the Product interface here
}
