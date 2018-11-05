import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { GeneroProvider } from '../../providers/genero/genero';
import { Genero } from '../../modelo/genero';
import { Network } from '@ionic-native/network';

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

  public genero: Genero;
  public generos: Genero[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public generoProvider: GeneroProvider,
    private toastCtrl: ToastController,
    private network: Network,
  ) {
    this.genero = new Genero();
  }

  // Método acionado assim que a página é carregada, de forma assincrona  
  ionViewDidLoad() {
    console.log('bateu aqui');

    this.network.onConnect().subscribe(() => {
      this.movieProvider.getGenres().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.generos = objeto_retorno.genres;
          console.log(this.generos);
          this.exibirToast("Com conexão com a internet. Generos carregados do The Movie DB");

          for (let i = 0; i < this.generos.length; i++) {
            this.genero = this.generos[i];
            this.generoProvider.inserir(this.genero);
            console.log(this.genero);
          }

        }, error => {
          console.log(error);
        }
      )
    })

    this.network.onDisconnect().subscribe(() => {
      this.generoProvider.listar()
        .then((generos: Genero[]) => {
          this.generos = generos;
          this.exibirToast("Sem conexão com a internet. Generos carregados do DB");
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
