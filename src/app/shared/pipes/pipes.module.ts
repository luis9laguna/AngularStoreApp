import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagePipe } from './image.pipe';
import { ImagecategoryPipe } from './imagecategory.pipe';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    ImagePipe,
    ImagecategoryPipe,
    CapitalizePipe,
  ],
  exports: [
    ImagePipe,
    ImagecategoryPipe,
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
