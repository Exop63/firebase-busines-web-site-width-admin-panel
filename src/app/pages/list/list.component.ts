import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  products$: Observable<IProduct[]> = this.productsService.getProduct();
  get isAdmin(): boolean | undefined { return this.authService.IsAdmin(); }
  constructor(private productsService: ProductsService, private authService: AuthService) { }
}
