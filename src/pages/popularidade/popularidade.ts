
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filme';
import { MovieProvider } from '../../providers/movie/movie';


@IonicPage()
@Component({
  selector: 'page-popularidade',
  templateUrl: 'popularidade.html',
  providers: [
    MovieProvider
  ]
})
export class PopularidadePage {

  public lista_filmes = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {

  }

  // Método acionado assim que a página é carregada, de forma assincrona  
  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results; // Percorre a lista de filmes retornado e grava em um Array
        console.log(objeto_retorno);

      }, error => {
        console.log(error);
      }
    )
  }
}
