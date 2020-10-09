//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

//COMPONENTS
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CardComponent,
  ],
  exports: [
    NavComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
  ]
})
export class ComponentsModule { }
