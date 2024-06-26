import { Component, OnInit } from '@angular/core';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Lógica para el inicio de sesión
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  cities!: City[] ;

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}
