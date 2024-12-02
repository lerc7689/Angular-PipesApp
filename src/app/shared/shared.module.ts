import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../Prime-NG/prime-ng.module';
import { SharedMenuComponent } from './shared-menu/shared-menu.component';

@NgModule({
  declarations: [SharedMenuComponent],
  imports: [CommonModule, PrimeNGModule],
  exports: [SharedMenuComponent],
})
export class SharedModule {}
