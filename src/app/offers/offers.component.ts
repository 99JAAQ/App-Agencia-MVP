import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { Destino } from '../../domain/destino';
import { City } from '../../domain/city';
import { MoreInfo } from '../../domain/moreinfo';

import { ProductService } from '../../service/productservice';
import { DestinoService } from '../../service/destinoservice';
import { CityService } from '../../service/cityservice';
import { MoreInfoService } from '../../service/moreinfoservice';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  products!: Product[];

  destinos!: Destino[];
  selectedDestino: Destino | undefined;

  cities!: City[];
  selectedCity: City | undefined;

  date: Date[] | undefined;

  moreinfos!: MoreInfo[];
  selectedMoreInfo: MoreInfo | undefined;

  visible: boolean = false;

    
  constructor(
    private productService: ProductService, 
    private destinoService: DestinoService,
    private cityService: CityService ,
    private moreInfoService: MoreInfoService) {}

  ngOnInit() {
    this.destinoService.getDestinos().then((data) => {
      this.destinos = data;
    });

    this.cityService.getCities().then((data) => {
      this.cities = data;
    });

    this.moreInfoService.getInfo().then((data) => {
      this.moreinfos = data;
    });

    this.productService.getProducts().then((data) => {
      this.products = data;
    });

  }

  getSeverity(product: Product): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'secondary';
    }
  }
  showDialog() {
    this.visible = true;
}
}
