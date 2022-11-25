import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: any = [
    {
      name: 'Washing Machine',
      inData: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam mollitia excepturi dolorem, maxime doloribus similique.Praesentium, quibusdam consectetur.Iste ? ",
      img: 'https://www.hitachi-homeappliances.com/products/washing-machine/image/category_4_sp.jpg',
      router: 'washing-machine'
    },
    {
      name: 'Laptop',
      inData: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam mollitia excepturi dolorem, maxime doloribus similique.Praesentium, quibusdam consectetur.Iste ? ",
      img: 'https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg',
      router: 'laptop'
    },
    {
      name: 'Mobile',
      inData: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam mollitia excepturi dolorem, maxime doloribus similique.Praesentium, quibusdam consectetur.Iste ? ",
      img: 'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a16/middlebanner/A16-middlebanner-blue-640x480-mobile.jpg.thumb.webp',
      router: 'mobile'
    },
    {
      name: 'TV',
      inData: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam mollitia excepturi dolorem, maxime doloribus similique.Praesentium, quibusdam consectetur.Iste ? ",
      img: 'https://media.product.which.co.uk/prod/images/original/gm-651fe853-6a2a-4777-a7cc-d44ac4185c70-lg-oled55b16lainline.jpg',
      router: 'tv'
    },
  ];

}
