//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

//COMPONENTS
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CardsComponent
  ],
  exports: [
    NavComponent,
    FooterComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
