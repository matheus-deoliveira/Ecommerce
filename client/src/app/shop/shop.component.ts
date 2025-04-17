import { Component, OnInit, Inject, inject } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { error } from 'console';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.getProducts().subscribe(response => {
      this.products = response;
    }, error => {
      console.log(error);
    });
  }
}
