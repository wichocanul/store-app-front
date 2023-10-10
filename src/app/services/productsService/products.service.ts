import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse, RemoveProduct } from 'src/app/interfaces/product-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = environment.urlStoreApp;

  constructor(private http: HttpClient) {}

  searchArticle(word: string): Observable<ProductResponse> {
    let url = ``;
    word == 'todo'
      ? (url = `${this.baseUrl}/products/search`)
      : (url = `${this.baseUrl}/products/search?search_term=${word}`);

    return this.http.get<ProductResponse>(url);
  }

  getAllProducts(): Observable<ProductResponse> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<ProductResponse>(url);
  }

  remove(id: number): Observable<RemoveProduct> {
    const url = `${this.baseUrl}/product-delete/${id}`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete<RemoveProduct>( url, { headers } );
  }
}
