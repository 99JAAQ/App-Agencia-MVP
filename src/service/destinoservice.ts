import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
    getDestinosData() {
        return [
            { name: 'NACIONAL', code: 'NAL' },
            { name: 'INTERNACIONAL', code: 'INT' },
            { name: 'EUROPEO', code: 'EUR' }
        ]
    }

    getDestinos() {
        return Promise.resolve(this.getDestinosData());
    }
}