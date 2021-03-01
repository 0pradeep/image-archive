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
  imageThumbnails: ImageThumbnail[];
  imgThumbnail: ImageThumbnail;
  searchText: string = '';
  position: string = "before";
  sortBy: string = "Date";
  sortIcon: string = "arrow_downward";
  sortFields = [
    { field: 'Date', value: 'dateAsc', icon: 'arrow_downward' },
    { field: 'Date', value: 'dateDesc', icon: 'arrow_upward' },
    { field: 'Name', value: 'nameAsc', icon: 'arrow_downward' },
    { field: 'Name', value: 'nameDesc', icon: 'arrow_upward' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    if (localStorage.hasOwnProperty('imgArchive')) {
      this.imageThumbnails = JSON.parse(localStorage.getItem('imgArchive') || "[]");
    } else {
      this.imageThumbnails = [
        {
          id: 1,
          name: "Dog breed Shibu Inu",
          imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
          date: "1613743281117"
        },
        {
          id: 2,
          name: "Cat playing",
          imageUrl: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
          date: "1613743283277"
        }
      ];
    }
  }

  addImage(): void {
    const dialogRef = this.dialog.open(AddImageDialogComponent, {
      width: '250px',
      data: { imgThumbnail: this.imgThumbnail }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.imageThumbnails);
      this.imgThumbnail = result;
      console.log(result);

      this.imageThumbnails.push({
        id: this.imageThumbnails.length + 1,
        name: result.data.name,
        imageUrl: result.data.imageUrl,
        date: Date.now().toString()
      });
      localStorage.setItem('imgArchive', JSON.stringify(this.imageThumbnails));
    })

  }

  sortImages(value): void {
    let iSortInAsc: boolean = true;
    if (value == "nameAsc" || value == "nameDesc") {
      this.sortBy = "Name";
      this.imageThumbnails.sort((a, b) => a.name.localeCompare(b.name));
      if (value == "nameDesc") {
        this.imageThumbnails.reverse();
        iSortInAsc = false;
      }
    } else {
      this.sortBy = "Date";
      this.imageThumbnails.sort((a, b) => a.date.localeCompare(b.date));
      if (value == "dateDesc") {
        this.imageThumbnails.reverse();
        iSortInAsc = false;
      }
    }
    if (iSortInAsc)
      this.sortIcon = "arrow_downward";
    else
      this.sortIcon = "arrow_upward";
  }

  changePosition(position: string): void {
    this.position = position;
  }
}
