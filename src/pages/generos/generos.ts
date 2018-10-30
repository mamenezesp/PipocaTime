import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/genero';

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

  public generos: Genero[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var g1 = { titulo: 'Comédia' };
    var g2 = { titulo: 'Romance' };
    var g3 = { titulo: 'Ação' };
    var g4 = { titulo: 'Drama' };
    var g5 = { titulo: 'Comédia Romântica' };
    var g6 = { titulo: 'Documentário' };
    this.generos = [g1, g2, g3, g4, g5, g6];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerosPage');
  }

}
