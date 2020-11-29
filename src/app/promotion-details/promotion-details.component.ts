import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-promotion-details',
  templateUrl: './promotion-details.component.html',
  styleUrls: ['./promotion-details.component.css']
})
export class PromotionDetailsComponent implements OnInit {
  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;

  slides = [
    {img: "../../assets/imgs/pexels-anete-lusina-4790590.jpg"},
    {img: "../../assets/imgs/pexels-tony-pham-4869369.jpg"},
    {img: "../../assets/imgs/pexels-dương-nhân-2012150.jpg"},
    {img: "../../assets/imgs/pexels-thanhhoa-tran-1488331.jpg"}

  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, 
  'arrows': false};


  slickInit(e) {
    console.log('slick initialized');
  }
 
  next() {
    this.slickModal.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
  }
  constructor() { }

  ngOnInit() {
  }

}
