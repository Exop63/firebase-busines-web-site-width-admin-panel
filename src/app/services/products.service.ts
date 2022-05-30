import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly PATH: string = "products";
  constructor(private firestore: AngularFirestore) { }

  getProduct(): Observable<IProduct[]> {
    return this.firestore.collection<IProduct>(this.PATH).valueChanges({ idField: 'id' })
  }
}
