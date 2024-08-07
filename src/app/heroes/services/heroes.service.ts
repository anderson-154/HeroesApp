import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of } from "rxjs";
import { environments } from "environments/environments";
import { Hero } from '../interfaces/hero.interce';

@Injectable({providedIn:'root'})
export class Heroservice {
  private baseUrl: string = environments.baseUrl;
  constructor (private http : HttpClient){}

    getHeroes(): Observable<Hero[]>{
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

    getHerobyId(id:string): Observable<Hero|undefined>{
      return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(error=> of(undefined) )
      )
    }

    getSuggestions(query:string):Observable<Hero[]>{
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
    }

    addHero(hero:Hero): Observable<Hero>{
      return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
    }

    updateHero(hero:Hero): Observable<Hero>{
      if(!hero.id) throw Error("El heroe no existe");
      return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
    }

    deleteHeroById(id:string): Observable<boolean>{
      return this.http.delete(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError(err=> of(false)),
        map( resp=>true)
      );
    }
}
