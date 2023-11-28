import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interce';
import { Heroservice } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-add-new-hero-page',
  templateUrl: './add-new-hero-page.component.html',
  styles: [
  ]
})
export class AddNewHeroPageComponent implements OnInit {

  public hero?:Hero;

  constructor(
    private heroservice:Heroservice,
    private activateRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({id})=>this.heroservice.getHerobyId(id)),
      ).subscribe(hero=>{
        if(!hero) return this.router.navigate(['heroes/list'])
        this.hero=hero
      return
      })
  }

  goBack(){
    this.router.navigateByUrl('heroes/list/')
  }
}
