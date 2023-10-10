import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductData } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/services/productsService/products.service';

@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.css'],
})
export class CategoryMainComponent implements OnInit {
  word: string = '';
  products: ProductData[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.word = params['category'];
      this.search();
    });
  }

  search() {
    this.productsService.searchArticle(this.word).subscribe({
      next: (resp) => {
        this.products = resp.data;
      },
      error: (err) => {
        this.products = [];
      },
    });
  }
}
