import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavBarComponent, CommonModule]
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  products: IProduct[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IProduct[]>('https://localhost:5001/api/products').subscribe({
      next: (response) => {
        console.log('Resposta recebida:', response);
        this.products = response;
      },
      error: (error) => {
        console.error('Erro na requisição:', error);
      }
    });
  }
}