
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/  

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
  ],
})
export class IntroPageModule {}
