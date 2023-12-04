import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interce';
import { Heroservice } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent  {

 public searchInput = new FormControl('');
 public heroes: Hero[]=[];
  public selectedHero? :Hero;

 constructor(private heroesService: Heroservice){ }

 searchHero(){
  const value: string = this.searchInput.value || '';
  this.heroesService.getSuggestions(value)
  .subscribe(heroes=>this.heroes = heroes);
 }

 onSelectedOption(event: MatAutocompleteSelectedEvent){
  if(!event.option.value){
    this.selectedHero= undefined;
    return;
  }
  const hero: Hero = event.option.value;
  this.searchInput.setValue(hero.superhero);
  this.selectedHero = hero;
 }
}
