import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/

@IonicPage()
@Component({
  selector: 'page-generos',
  templateUrl: 'generos.html',
})
export class GenerosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerosPage');
  }

}
