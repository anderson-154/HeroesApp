import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environments } from "environments/environments";
import { Hero } from "../interfaces/hero.interce";

@Injectable({providedIn:'root'})
export class Heroservice {
  private baseUrl: string = environments.baseUrl;
  constructor (private http : HttpClient){}

    getHeroes(): Observable<Hero[]>{
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

}