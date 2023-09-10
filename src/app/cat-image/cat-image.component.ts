import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-image',
  templateUrl: './cat-image.component.html',
  styleUrls: ['./cat-image.component.scss'],
})
export class CatImageComponent {

  imgUrl: string = 'https://cataas.com/cat';
  fileName: string = 'cat.jpg';
  canShowImg = false;
  originalImgUrl: string;

  constructor() {
    this.originalImgUrl = "";
  }

  updateImg(): void {
    this.canShowImg = true;
    this.imgUrl = 'https://cataas.com/cat?' + new Date().getTime();
    this.originalImgUrl = this.imgUrl;
  }

}