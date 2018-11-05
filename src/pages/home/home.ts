
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionaFilmePage } from '../adiciona-filme/adiciona-filme';
import { ExibeFilmesPage } from '../exibe-filmes/exibe-filmes';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  cadastrarFilme() {
    this.navCtrl.push(AdicionaFilmePage);
  }

  exibirFilmes (){
    this.navCtrl.push(ExibeFilmesPage);
    }

}
