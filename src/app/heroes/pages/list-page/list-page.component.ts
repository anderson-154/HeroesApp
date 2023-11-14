import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interce';
import { Heroservice } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  public heroes:Hero[] = [];

  constructor(private heroservice:Heroservice) { }

  ngOnInit(): void {
    this.heroservice.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
