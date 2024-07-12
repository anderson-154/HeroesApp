import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styles: [
  ]
})
export class LoginPagesComponent  {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin(): void{
    this.authService.login("anderson@gmail.com", "1234")
      .subscribe(user => {
        this.router.navigate(['/'])
      })
  }

}
