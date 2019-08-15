import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PrimengDemoComponent } from './primeng-demo/primeng-demo.component';
import { D3DemoComponent } from './d3-demo/d3-demo.component';


@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
	imports: [
        CommonModule,
    ],
	declarations: [
        PrimengDemoComponent,
        D3DemoComponent
    ],
	exports: [
        PrimengDemoComponent,
        D3DemoComponent
    ]
})
export class ComponentModule {}
