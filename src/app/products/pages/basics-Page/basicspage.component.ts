import { Component } from '@angular/core';

@Component({
  selector: 'app-basicspage',
  templateUrl: './basicspage.component.html',
  styleUrl: './basicspage.component.css',
})
export class BasicspageComponent {
  public nameLower: string = 'luis ramirez';
  public nameUpper: string = 'LUIS RAMIREZ';
  public fullName: string = 'lUIs rAMirEz';

  public customDate: Date = new Date();
}
