import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule }    from './app-routing.module';
import { MainMenuComponent } from './main-menu.component';
import { MdToolbarModule, MdButtonModule, MdCheckboxModule,
         MdSidenavModule, MdInputModule, MdSelectModule, MdMenuModule, MdTabsModule, MdIconModule } from '@angular/material'


@NgModule({
  imports:[
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpModule,
  BrowserAnimationsModule,
  MdButtonModule,
  MdCheckboxModule,
  MdSidenavModule,
  MdInputModule,
  MdMenuModule,
  MdToolbarModule,
  MdTabsModule,
  MdSelectModule,
  MdIconModule
  ],
  declarations:[
    AppComponent,
    MainMenuComponent

  ],
  providers:[

  ],
  bootstrap:[ AppComponent]

})
export class AppModule { }
