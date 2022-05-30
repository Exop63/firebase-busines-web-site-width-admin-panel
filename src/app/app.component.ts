import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products$: Observable<IProduct[]> = this.productsService.getProduct();
  constructor(private productsService: ProductsService) { }
}
