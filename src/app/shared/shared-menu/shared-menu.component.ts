import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './shared-menu.component.html',
  styleUrl: './shared-menu.component.css',
})
export class SharedMenuComponent implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          { label: 'Números', icon: 'pi pi-dollar', routerLink: '/numbers' },
          { label: 'No Comunes', icon: 'pi pi-globe', routerLink: '/uncommon' },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          { label: 'Custom Pipes', icon: 'pi pi-cog', routerLink: '/custom' },
        ],
      },
    ];
  }
}
