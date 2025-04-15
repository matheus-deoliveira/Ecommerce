import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavBarComponent]
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/Products/products').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });
  }
}