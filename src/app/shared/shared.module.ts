import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemeuComponent } from './sidemeu/sidemeu.component';



@NgModule({
  declarations: [SidemeuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidemeuComponent
  ]
})
export class SharedModule { }
