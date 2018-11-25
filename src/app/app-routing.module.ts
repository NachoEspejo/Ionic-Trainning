import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'goals', loadChildren: './goals/goals.module#GoalsPageModule' },
  { path: 'edit', loadChildren: './edit-player/edit-player.module#EditPlayerPageModule' },
  { path: 'edit/:id', loadChildren: './edit-player/edit-player.module#EditPlayerPageModule' },
  { path: 'editgoals/:id', loadChildren: './edit-goalsplayer/edit-goalsplayer.module#EditGoalsPlayerPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
