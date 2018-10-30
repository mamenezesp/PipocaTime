
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularidadePage } from './popularidade';

@NgModule({
  declarations: [
    PopularidadePage,
  ],
  imports: [
    IonicPageModule.forChild(PopularidadePage),
  ],
})
export class PopularidadePageModule {}
