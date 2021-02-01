import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemeuComponent } from './sidemeu/sidemeu.component';



@NgModule({
  declarations: [SidemeuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemeuComponent
  ]
})
export class SharedModule { }
