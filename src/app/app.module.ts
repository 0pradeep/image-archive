import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageThumbnailComponent } from './components/image-thumbnail/image-thumbnail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { FilterPipe } from './pipes/filter.pipe';
import { AddImageDialogComponent } from './components/add-image-dialog/add-image-dialog.component';
import { VotingContestComponent } from './components/voting-contest/voting-contest.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageThumbnailComponent,
    AddImageDialogComponent,
    FilterPipe,
    VotingContestComponent
  ],
  entryComponents:[
    AddImageDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
