import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VotingContestComponent } from './components/voting-contest/voting-contest.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'votingcontest', component: VotingContestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
