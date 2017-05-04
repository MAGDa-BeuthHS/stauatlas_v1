import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent }    from './main-menu.component'

const routes: Routes = [
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
  { path: 'main-menu',  component: MainMenuComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
