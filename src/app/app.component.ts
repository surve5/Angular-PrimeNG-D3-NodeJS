import { Component, OnInit } from '@angular/core';
import {AppService} from './appservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'angular-seed';


  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  detectTabChange($event) {
    if($event.index === 2) {
      d3.select("#d3Chart").style({"visibility": 'visible'});
    } else {
      d3.select("#d3Chart").style({"visibility": 'hidden'});
    }
  } 


}
