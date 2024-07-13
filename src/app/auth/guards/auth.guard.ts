import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({providedIn:'root'})
export class AuthGuard implements CanMatch, CanActivate{

  constructor(){ }
  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean>{
  return true
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return true
  }
}
