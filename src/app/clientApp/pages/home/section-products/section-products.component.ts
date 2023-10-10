import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProductData } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/services/productsService/products.service';

@Component({
  selector: 'app-section-products',
  templateUrl: './section-products.component.html',
  styleUrls: ['./section-products.component.css']
})
export class SectionProductsComponent implements OnInit {

  productsSection: ProductData[] = [];
  product: ProductData = {'id': 0, 'name': '', 'description': '', 'price': '', 'stock': 0, 'image': [''], 'sku': '', 'category_id': ''}

  @Input() title: string = '';
  @Input() category: string = '';

  @ViewChild('asContainerCards') containerCards!: ElementRef;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.searchArticle(this.category).subscribe({
      next: (resp) => {
        this.productsSection = resp.data;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  moveLeft() {
    let scrollElement = this.containerCards.nativeElement;
    scrollElement.scrollLeft -= 260;
  }

  moveRight() {
    let contenedorElement  = this.containerCards.nativeElement;
    contenedorElement.scrollLeft += 260;
  }

}
