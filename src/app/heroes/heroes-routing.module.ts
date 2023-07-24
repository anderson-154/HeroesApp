import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AddNewHeroPageComponent } from './pages/add-new-hero-page/add-new-hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      {path:'new-hero', Component: AddNewHeroPageComponent},
      {path:'search', Component: SearchPageComponent},
      {path:'edit/:id', Component: AddNewHeroPageComponent},
      {path:'list', Component: ListPageComponent},
      {path:':id', Component: ListPageComponent},
      {path:'**', redirectTo:'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
