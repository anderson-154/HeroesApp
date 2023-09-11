import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent{

  public sidebarItems =[
    {label: 'Listado', icon:'label',url:'./list-page'},
    {label: 'Añadir', icon:'add',url:'./new-hero'},
    {label: 'Buscar', icon:'search',url:'./search'}
  ]
}
