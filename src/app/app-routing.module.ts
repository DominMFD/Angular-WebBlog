import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NoticePageComponent } from './Pages/notice-page/notice-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'notice/:id',
    component: NoticePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
