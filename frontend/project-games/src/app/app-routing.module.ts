import { GamesListComponent } from './components/games-list/games-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesIncludeComponent } from './components/games-include/games-include.component';

const routes: Routes = [
  {
    path:"",
    component:GamesListComponent
  },
  {
    path:"include",
    component: GamesIncludeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
