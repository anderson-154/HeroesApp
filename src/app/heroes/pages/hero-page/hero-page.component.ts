import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent {

  public publishers = [
    {id: 'DC Comivs', desc: 'DC-Comics'},
    {id: 'Marvel Comics', desc: 'Marvel-comics'}
  ]
  constructor(

  ) { }

}
