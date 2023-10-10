import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { ProductData } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/services/productsService/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  word: string = '';
  wordsFound: ProductData[] = [];
  debouncer: Subject<string> = new Subject();

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.word = '';
    this.debouncer.pipe(debounceTime(400)).subscribe({
      next: (resp) => {
        console.log(resp);
        this.word = resp;
        this.search()
      },
    });
  }

  search() {
    this.productsService.searchArticle(this.word).subscribe({
      next: (resp) => {
        this.wordsFound = resp.data;
      },
      error: (err) => {
        this.wordsFound = [];
      },
    });
  }

  redirect() {
    this.router.navigateByUrl(`/store/search/${this.word}`)
    this.word = '';
  }

  pressKey() {
    this.debouncer.next(this.word);
  }

  assignWords(word: string) {
    this.word = word.toLocaleLowerCase();
    this.redirect();
  }
}
