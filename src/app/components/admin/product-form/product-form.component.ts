import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
product = {};
id;
  constructor( categoryService: CategoryService, private prodService: ProductService, private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.prodService.get(this.id).pipe(take(1)).subscribe(p => this.product =p);
   }
  save(product){
    this.prodService.create(product);
  }
  ngOnInit(): void {
  }


}
