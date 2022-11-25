import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  products: any = [
    {
      name: 'Image 1',
      img: 'https://www.freecodecamp.org/news/content/images/2022/04/derick-mckinney-oARTWhz1ACc-unsplash.jpg',
      router: 'image-1'
    },
    {
      name: 'Image 2',
      img: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      router: 'image-2'
    },
    {
      name: 'Image 3',
      img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/115871/mt-15-v2-right-front-three-quarter-3.jpeg?isig=0&q=75',
      router: 'image-3'
    },
    {
      name: 'Image 4',
      img: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
      router: 'image-4'
    },
  ];


}
