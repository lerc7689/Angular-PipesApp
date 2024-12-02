import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { BasicspageComponent } from './pages/basics-Page/basicspage.component';
import { PrimeNGModule } from '../Prime-NG/prime-ng.module';
import { OrderCustomPipesComponent } from './pages/order-custom-pipes/order-custom-pipes.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { canFlyPipe } from './pipes/canFly.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';

@NgModule({
  declarations: [
    BasicspageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderCustomPipesComponent,

    //Pipes
    ToggleCasePipe,
    canFlyPipe,
    SortByPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNGModule],
})
export class ProductsModule {}
