import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from 'src/app/interfaces/product-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = environment.urlStoreApp;

  constructor(private http: HttpClient) { }

  searchArticle(word: string): Observable<ProductResponse> {
    let url = ``;
    word == 'todo' ? url = `${this.baseUrl}/products/search` : url = `${this.baseUrl}/products/search?search_term=${word}`;

    return this.http.get<ProductResponse>( url );
  }
}
