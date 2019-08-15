import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';

import { PrimengDemoComponent } from './component/primeng-demo/primeng-demo.component';
import { D3DemoComponent } from './component/d3-demo/d3-demo.component';

import { ComponentModule } from './component/component.module';

@NgModule({
  imports: [
    BrowserModule,  TableModule, HttpClientModule, MatTabsModule, BrowserAnimationsModule
  ],
  declarations: [
    AppComponent, PrimengDemoComponent, D3DemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
