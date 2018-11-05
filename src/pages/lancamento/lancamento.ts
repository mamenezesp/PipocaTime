
/*
 *@Author: Marcela Menezes Pinto
 *@RA: 816117695
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeProvider } from '../../providers/filme/filme';
import { Filme } from '../../modelo/filme';
import { Network } from '@ionic-native/network';


@IonicPage()
@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
  providers: [
    MovieProvider
  ]
})
export class LancamentoPage {

  public filme: Filme;
  public filmes: Filme[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    private filmeProvider: FilmeProvider,
    private network: Network,
    private toastCtrl: ToastController) 
    {
      this.filme = new Filme();
  }

  // Método acionado assim que a página é carregada, de forma assincrona  
  ionViewDidLoad() {

    this.network.onConnect().subscribe(() => {
      this.movieProvider.getLatestMovies().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.filme = objeto_retorno;
          this.exibirToast("Com conexão com a internet. Filmes carregados do The Movie DB");


          for (var i = 0; i < this.filmes.length; i++) {
            this.filme = this.filmes[i];
            this.filmeProvider.inserir(this.filme);
            console.log(this.filme);
          }
        }, error => {
          console.log(error);
        }
      )

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
