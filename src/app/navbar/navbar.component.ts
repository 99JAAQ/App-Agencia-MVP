import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{ 

  items: MenuItem[] = [];
  menuItems: MenuItem[] = [];

  ngOnInit() {

    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Ofertas',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/offers']
      },
      {
        label: 'Cotizador',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: ['/Cotizador'],
        visible:false
      },
      {
        label: 'Administración',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'Usuarios y permisos',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/orders/new']
          },
          {
            label: 'Destinos',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/orders/new']
          },
          {
            label: 'Hoteles',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/orders/new']
          }
        ]
      }
    ];
  }
  logout() {
    // Lógica para cerrar sesión
    console.log('Cerrando sesión');
  }
}
