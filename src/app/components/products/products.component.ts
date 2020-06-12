import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products$: any;
categories$: any;

  constructor(productService: ProductService, categoryService: CategoryService) { 
    this.products$ = productService.getAll().subscribe(product => this.products$ =product);
    this.categories$ = categoryService.getCategories().subscribe(category => this.categories$ = category);
  }
//TODO: Add Filtre par Categorie
//TODO: Extraire le filtre dans un composant
//TODO: Ajouter du style au Hover
  ngOnInit(): void {
  }

}
