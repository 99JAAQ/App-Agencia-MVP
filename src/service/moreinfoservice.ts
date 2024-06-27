import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreInfoService {
    getInfoData() {
        return [
            { name: '¿Incluye vuelo?', code: '1'},
            { name: '¿alojamiento?', code: '2'}

        ]
    }

    getInfo() {
        return Promise.resolve(this.getInfoData());
    }
}