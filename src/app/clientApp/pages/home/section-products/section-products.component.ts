import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-products',
  templateUrl: './section-products.component.html',
  styleUrls: ['./section-products.component.css']
})
export class SectionProductsComponent {

  @Input() title: string = '';

  @ViewChild('asContainerCards') containerCards!: ElementRef;

  moveLeft() {
    let scrollElement = this.containerCards.nativeElement;
    scrollElement.scrollLeft -= 260;
  }

  moveRight() {
    let contenedorElement  = this.containerCards.nativeElement;
    contenedorElement.scrollLeft += 260;
  }

}
