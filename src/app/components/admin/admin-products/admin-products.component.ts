// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ProductService } from 'src/app/product.service';
// import { Product } from 'src/app/models/product';
// import { Subscription } from 'rxjs/internal/Subscription';

// @Component({
//   selector: 'app-admin-products',
//   templateUrl: './admin-products.component.html',
//   styleUrls: ['./admin-products.component.css']
// })
// export class AdminProductsComponent implements OnInit {
// products;
// subscription: Subscription;
// tableResource: DataTableResource<Product>;
// items : Product[] = [];
// itemCount: number = 0;

//   constructor(private ProdService: ProductService) {
//     this.subscription = this.ProdService.getAll()
//       .subscribe(products => {
//         this.products = products
        
//         this.initializeTable(products)
//       })
//    }

//    private initializeTable(products){
//      this.tableResource = new DataTableResource(products);
//      this.tableResource.query({offset: 0})
//       .then(items => this.items = items);
//     this.tableResource.count()
//       .then(count => this.itemCount = count)
//    }
//    reloadItems(params) {
//     if (!this.tableResource) return
//     this.tableResource.query(params).then(items => this.items = items)
//    }



//   filter(query: string) {
//     let filteredProducts = (query) ? 
//       this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products

//       this.initializeTable(filteredProducts)
//   }
   
//   ngOnDestroy(){
//     this.subscription.unsubscribe()
//   }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
products$
  constructor(private ProdService: ProductService) {
    this.products$ = this.ProdService.getAll();
   }
   

  ngOnInit(): void {
  }

}
