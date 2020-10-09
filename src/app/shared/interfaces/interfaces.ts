import { Category } from '../models/category';
import { Product } from '../models/product';

export interface ResCategory {
  ok: boolean;
  categories: Category[];
}


export interface ResProducts {
  ok: boolean;
  products: Product[];
}

export interface ResProduct {
  ok: boolean;
  product: Product[];
}


export interface ResSearch {
  ok: boolean;
  results: Product[];
}