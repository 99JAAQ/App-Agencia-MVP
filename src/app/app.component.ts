import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  constructor(private router: Router) {}

  showNavbar(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/home' || currentRoute === '/offers';
  }
}
