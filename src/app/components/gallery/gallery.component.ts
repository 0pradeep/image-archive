import { Component, OnInit } from '@angular/core';
import { ImageThumbnail } from '../../models/ImageThumbnail';
import { MatDialog } from '@angular/material/dialog';
import { AddImageDialogComponent } from '../add-image-dialog/add-image-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imageThumbnails:ImageThumbnail[];
  imgThumbnail:ImageThumbnail;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.imageThumbnails=[
      {
        id: 1,
        name: "Dog breed Shibu Inu",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        id: 2,
        name: "Cat playing",
        imageUrl: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"
      }
    ];
  }

  addImage():void {
    const dialogRef = this.dialog.open(AddImageDialogComponent, {
      width: '250px',
      data: {imgThumbnail: this.imgThumbnail}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.imageThumbnails);
      this.imgThumbnail = result;
      console.log(result);
      
      this.imageThumbnails.push({
        id : this.imageThumbnails.length + 1,
        name: result.data.name,
        imageUrl: result.data.imageUrl
      });
    })
  }
}
