import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AddNewHeroPageComponent } from './pages/add-new-hero-page/add-new-hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      {path:'new-hero', component: HeroPageComponent},
      {path:'search', component: SearchPageComponent},
      {path:'edit/:id', component: HeroPageComponent},
      {path:'list', component: ListPageComponent},
      {path:':id', component: AddNewHeroPageComponent},
      {path:'**', redirectTo:'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
