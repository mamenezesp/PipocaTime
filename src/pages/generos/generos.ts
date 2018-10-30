import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/ 

@IonicPage()
@Component({
  selector: 'page-generos',
  templateUrl: 'generos.html',
  providers: [
    MovieProvider
  ]
})
export class GenerosPage {

  public generos = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  // Método acionado assim que a página é carregada, de forma assincrona  
  ionViewDidLoad() {
    this.movieProvider.getGenres().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.generos = objeto_retorno.genres;
        console.log(this.generos);
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
