import { Component, OnInit,ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;

  slides = [
    {img: "../../assets/imgs/pexels-anete-lusina-4790590.jpg"},
    {img: "../../assets/imgs/pexels-tony-pham-4869369.jpg"},
    {img: "../../assets/imgs/pexels-dương-nhân-2012150.jpg"},
    {img: "../../assets/imgs/pexels-thanhhoa-tran-1488331.jpg"},
    {img: "../../assets/imgs/pexels-vinícius-vieira-ft-4017156.jpg"},
    {img: "../../assets/imgs/pexels-charlotte-may-5824527.jpg"}
    

  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1, 
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
  constructor() {
    
   }

  ngOnInit() {
 
  }

}
