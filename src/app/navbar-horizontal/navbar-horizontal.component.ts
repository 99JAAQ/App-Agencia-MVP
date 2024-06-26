import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar-Horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.css']
})

export class NavbarHorizontalComponent implements OnInit{ 

  splitButton: MenuItem[] = [];

  ngOnInit() {
    this.splitButton = [
      
            { label: 'Mi perfil', url: '#' },
            { separator: true },
            { label: 'Cerrar sesión', routerLink: ['/login'] }
    ];

  }
}
