
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Filme } from '../../modelo/filme';
import { FilmeProvider } from '../../providers/filme/filme';
import { Network } from '@ionic-native/network';


@IonicPage()
@Component({
  selector: 'page-popularidade',
  templateUrl: 'popularidade.html',
  providers: [
    MovieProvider
  ]
})
export class PopularidadePage {

  public filme: Filme;
  public filmes = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    private filmeProvider: FilmeProvider,
    private network: Network,
    private toastCtrl: ToastController,
  ) {
    this.filme = new Filme();
  }

  // Método acionado assim que a página é carregada, de forma assincrona  
  ionViewDidLoad() {

    this.network.onConnect().subscribe(() => {
      this.movieProvider.getPopularMovies().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          console.log(objeto_retorno);
          this.filmes = objeto_retorno.results; // Percorre a lista de filmes retornado e grava em um Array
          console.log(this.filmes);
          this.exibirToast('Com conexão com a internet. Filmes carregados do The Movie DB');

          for (let i = 0; i < this.filmes.length; i++) {
            this.filme = this.filmes[i];
            this.filmeProvider.inserir(this.filme);
            console.log(this.filme);
          }
        }, error => {
          console.log(error);
        }
      )
    })

    this.network.onDisconnect().subscribe(() => {
      this.filmeProvider.listar()
        .then((filmes: Filme[]) => {
          this.filmes = filmes;
          this.exibirToast('Sem conexão com a internet. Filmes carregados do DB');
        });

    })
  }
  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }
}
