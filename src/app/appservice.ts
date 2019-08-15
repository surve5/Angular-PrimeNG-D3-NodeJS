import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from './car';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getCarsSmall() {
        return this.http.get<any>('assets/showcase/data/cars-small.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; });
    }

    getD3Data() {
        return this.http.get<any>('assets/showcase/data/readme.json')
        .toPromise()
        .then(data => { return data; });
    }
}