import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Filme } from '../../modelo/filme';
import { FilmeProvider } from '../../providers/filme/filme';
import { AtualizaFilmePage } from '../atualiza-filme/atualiza-filme';


@IonicPage()
@Component({
  selector: 'page-exibe-filmes',
  templateUrl: 'exibe-filmes.html',
})
export class ExibeFilmesPage {
  public filmes: Filme[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmeProvider: FilmeProvider, private toastCtrl: ToastController) {
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }

  ionViewDidLoad() {
    this.filmeProvider.listar().
      then((filmes: Filme[]) => {
        this.filmes = filmes;
      });
  }

  apagaFilme(filme: Filme) {
    this.filmeProvider.apagar(filme);
    this.exibirToast("Filme	apagado	com	sucesso");
    //para	atualizar	alista	que	está	sendo	exibida
    this.filmeProvider.listar().
      then((filmes: Filme[]) => {
        this.filmes = filmes;
      });
  }

  atualizaFilme(filme: Filme) {
    this.navCtrl.push(AtualizaFilmePage, filme);
  }
}
