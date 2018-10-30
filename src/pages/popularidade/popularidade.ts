
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/ 

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filme';

@IonicPage()
@Component({
  selector: 'page-popularidade',
  templateUrl: 'popularidade.html',
})
export class PopularidadePage {

  public filmes: Filme[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var f1 = { titulo: 'Venom', genero: 'George Orwell' };
    var f2 = { titulo: 'Harry Potter e a Pedra Filosofal', genero: 'J. K. Rowling' };
    var f3 = { titulo: 'O Senhor dos Anéis', genero: 'J. R. R. Tolkien' };
    var f4 = { titulo: 'O Fantasma da Opera', genero: 'Isaac Asimov' };
    var f5 = { titulo: 'Beleza Americana', genero: 'William Gibson' };
    var f6 = { titulo: 'O Homem do Castelo do Alto', genero: 'Philip K. Dick' };
    var f7 = { titulo: 'Snow Crash', genero: 'Neal Stephenson' };
    var f8 = { titulo: '2001: Uma Odisséia no Espaço', genero: 'Arthur Clarke' };
    var f9 = { titulo: 'Coraline', genero: 'Neal Gaiman' };
    this.filmes = [f1, f2, f3, f4, f5, f6, f7, f8, f9];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularidadePage');
  }

}
