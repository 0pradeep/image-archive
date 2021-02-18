import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageThumbnail } from 'src/app/models/ImageThumbnail';

@Component({
  selector: 'app-add-image-dialog',
  templateUrl: './add-image-dialog.component.html',
  styleUrls: ['./add-image-dialog.component.css']
})
export class AddImageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  closeDialog():void{
    this.dialogRef.close();
  }

  addImage():void{
    this.dialogRef.close({data: this.data});
  }
}
