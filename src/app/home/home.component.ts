import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems!: MenuItem[];
  carouselImages!: string[];
  destinations!: { name: string, image: string, description: string }[];
  testimonials!: { quote: string, name: string }[];

  ngOnInit() {

    this.carouselImages = [
      'https://i.postimg.cc/DZ4jK4CZ/carousel1.jpg',
      'https://i.postimg.cc/sf7Q0PYL/carousel2.jpg',
      'https://i.postimg.cc/fRZr0vCQ/carousel3.jpg',
      'https://i.postimg.cc/NGWrfJ4b/carousel4.jpg',
    ];

    this.destinations = [
      { name: 'Paris', image: 'https://i.postimg.cc/Bv5ZBN95/anthony-delanoix-Q0-f-OL2nq-Zc-unsplash.jpg', description: 'La Ciudad de la Luz.' },
      { name: 'New York', image: 'https://i.postimg.cc/q7mJFqqg/newyork.jpg', description: 'La Gran Manzana.' },
      { name: 'Tokyo', image: 'https://i.postimg.cc/HkVBMPMK/tokio.jpg', description: 'El país del sol naciente.' }
    ];

    this.testimonials = [
      { quote: '¡Un gran servicio y unas vacaciones fantásticas!', name: 'John Doe' },
      { quote: '¡Me encantó el viaje! ¡Todo fue perfecto!', name: 'Jane Smith' },
      { quote: 'La mejor agencia de viajes', name: 'Michael Johnson' }
    ];
  }
}
