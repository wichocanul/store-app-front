import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductData } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/services/productsService/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.css']
})
export class ProductsMainComponent implements OnInit {
  products: ProductData[] = [];
  currentProduct: ProductData = {
    id: 0,
    name: '',
    description: '',
    price: '',
    stock: 0,
    image: [''],
    sku: '',
    category_id: '',
  };

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.productsService.getAllProducts().subscribe({
      next: resp => {
        this.products = resp.data
      },
      error: err => {
        console.log(err)
      }
    })
  }

  alertRemove(product: ProductData) {
    Swal.fire ({
      title: 'esta seguro de eliminar:',
      text: product.name,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.remove(product.id)
        Swal.fire(
          'Borrado!',
          'Tus articulo fue eliminados!',
          'success'
        )
        this.getProducts();
      }
    })
  }

  async remove(id: number) {
    try {
      this.productsService.remove(id).subscribe({
        next: resp => {
          console.log(resp)
        },
        error: err => {
          console.log(err)
        }
      })
      await this.getProducts();
    }catch (error) {
      console.log(error);
    }

  }

  editProduct(product: ProductData) {
    console.log(product)
  }

}
