import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { IProductBrand } from '../shared/models/productBrand';
import { IProductType } from '../shared/models/productType';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number) {
    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }

    return this.http.get<IProduct[]>(this.baseUrl + 'products', { observe: 'response', params })
      .pipe(
        map(response => {
          return response.body!;
        })
      );
  }

  getProductBrands() {
    return this.http.get<IProductBrand[]>(this.baseUrl + 'brands');
  }

  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'types');
  }
}
