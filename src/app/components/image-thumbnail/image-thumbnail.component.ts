import { Component, OnInit, Input } from '@angular/core';
import { ImageThumbnail } from 'src/app/models/ImageThumbnail';

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.css']
})
export class ImageThumbnailComponent implements OnInit {
  @Input() imageThumbnail:ImageThumbnail;

  iImageUrlValid: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  invalidUrl(): void {
    this.iImageUrlValid = false;
  }
}
