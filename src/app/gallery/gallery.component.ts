import { Component, OnInit } from '@angular/core';
import { GalleryItemData } from '../galleryModal/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(
    private _gallery:GalleryItemData
  ) { }

  getItem:any;
  products:any;

  ngOnInit(): void {

    this.products = this._gallery.products;

  }

}
