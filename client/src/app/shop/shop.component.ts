import { Component, OnInit, Inject, inject, Input } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { error } from 'console';
import { ProductItemComponent } from "./product-item/product-item.component";
import { CommonModule } from '@angular/common';
import { IProductBrand } from '../shared/models/productBrand';
import { IProductType } from '../shared/models/productType';

@Component({
  selector: 'app-shop',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  productBrands: IProductBrand[] = [];
  productTypes: IProductType[] = [];
  brandIdSelected: number = 0;
  typeIdSelected: number = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getProducts();
    this.getProductBrands();
    this.getProductTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected).subscribe(response => {
      this.products = response;
    }, error => {
      console.log(error);
    });
  }

  getProductBrands() {
    this.shopService.getProductBrands().subscribe(response => {
      this.productBrands = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    });
  }

  getProductTypes() {
    this.shopService.getProductTypes().subscribe(response => {
      this.productTypes = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    });
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }
}