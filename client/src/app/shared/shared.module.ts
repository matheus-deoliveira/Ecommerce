import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [],
  imports: [
    PaginationModule.forRoot(),
    CommonModule
  ],
  exports: [
    PaginationModule,
    CommonModule
  ]
})
export class SharedModule { }
