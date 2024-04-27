import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imagePaths: string[] = [];
  slideIndex = 0;
  slideOffset = 0;
  slideWidth = 0;

  prevSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex--;
      this.updateSlideOffset();
    }
  }

  nextSlide() {
    if (this.slideIndex < this.imagePaths.length - 1) {
      this.slideIndex++;
      this.updateSlideOffset();
    }
  }

  updateSlideOffset() {
    this.slideOffset = -this.slideIndex * this.slideWidth;
  }

  onSlideLoad() {
    this.slideWidth = document.querySelector('.slides')?.clientWidth || 0;
    this.updateSlideOffset();
  }

}
