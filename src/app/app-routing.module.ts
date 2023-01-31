import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled'
    })
],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
