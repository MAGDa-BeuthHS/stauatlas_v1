import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';


@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: [ './main-menu.component.css' ]
})

export class MainMenuComponent{
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic/svg/menu.svg'));
  }
}
