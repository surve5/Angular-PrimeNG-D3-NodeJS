import { Component } from "@angular/core";
import {AppService} from '../../appservice';
import {Car} from '../../car';

@Component({
    selector: "primeng-demo",
    templateUrl: "./primeng-demo.component.html",
    styleUrls: ['primeng-demo.component.scss']
})

export class PrimengDemoComponent {

    cars1: Car[];

    cars2: Car[];
  
    cars3: Car[];
  
    cols: any[];
  
    constructor(private appService: AppService) { }
  
    ngOnInit() {
        this.appService.getCarsSmall().then(cars => this.cars1 = cars);
        this.appService.getCarsSmall().then(cars => this.cars2 = cars);
        this.appService.getCarsSmall().then(cars => this.cars3 = cars);
  
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
  
    }
  
  
}
