import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    CommonModule,
    MatToolbarModule
  ],
  exports: [MatToolbarModule, MatButtonModule, CommonModule]
})
export class MaterialModule { }
