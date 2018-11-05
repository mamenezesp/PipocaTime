
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerosPage } from './generos';

@NgModule({
  declarations: [
    GenerosPage,
  ],
  imports: [
    IonicPageModule.forChild(GenerosPage),
  ],
})
export class GenerosPageModule {}
