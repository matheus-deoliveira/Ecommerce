import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { ShopComponent } from "./shop/shop.component";
import { HomeModule } from './home/home.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavBarComponent, CommonModule, HomeModule, RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';

  constructor() { }

  ngOnInit(): void {

  }
}