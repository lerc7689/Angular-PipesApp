import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicspageComponent } from './pages/basics-Page/basicspage.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderCustomPipesComponent } from './pages/order-custom-pipes/order-custom-pipes.component';

const routes: Routes = [
  {
    path: '',
    component: BasicspageComponent,
  },
  {
    path: 'numbers',
    component: NumbersPageComponent,
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent,
  },
  {
    path: 'custom',
    component: OrderCustomPipesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
