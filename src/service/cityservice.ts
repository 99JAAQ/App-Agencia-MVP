import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
    getCitiesData() {
        return [
            { name: 'Medellín', code: 'MED', destinocode: 'NAL'},
            { name: 'Cartagena', code: 'CAR', destinocode: 'NAL' },
            { name: 'San Andres', code: 'SAN', destinocode: 'NAL' },

            { name: 'Buenos aires', code: 'BUA', destinocode: 'INT' },
            { name: 'Punta cana', code: 'PCA', destinocode: 'INT'},
            { name: 'Caracas', code: 'VEN', destinocode: 'INT' },

            { name: 'Barcelona', code: 'BAR', destinocode: 'EUR' },
            { name: 'Londres', code: 'LOND', destinocode: 'EUR'},
            { name: 'Paris', code: 'PRI', destinocode: 'EUR' },
            
            
        ]
    }

    getCities() {
        return Promise.resolve(this.getCitiesData());
    }
}