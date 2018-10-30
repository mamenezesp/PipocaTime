
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


@IonicPage()
@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
  providers: [
    MovieProvider
  ]
})
export class LancamentoPage {

  public filme = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  // Método acionado assim que a página é carregada, de forma assincrona  
  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.filme = objeto_retorno;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
