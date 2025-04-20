import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  imports: [CommonModule],
  templateUrl: './paging-header.component.html',
  styleUrl: './paging-header.component.scss'
})
export class PagingHeaderComponent implements OnInit {
  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 6;
  @Input() totalCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPageChanged(event: any) {
    this.pageNumber = event.page;
    this.pageSize = event.itemsPerPage;
  }

}
