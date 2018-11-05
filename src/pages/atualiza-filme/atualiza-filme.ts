import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';
import { Filme } from '../../modelo/filme';

/**
 * Generated class for the AtualizaFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atualiza-filme',
  templateUrl: 'atualiza-filme.html',
})
export class AtualizaFilmePage {
  
  public filme: Filme;
  constructor(public navCtrl: NavController, public navParams: NavParams, public filmeProvider: FilmeProvider, public toastCtrl: ToastController) {
    this.filme = this.navParams.data;
  }
  

  public atualizaFilme() {
    this.filmeProvider.atualizar(this.filme).
      then(
        () => {
          this.exibirToast("Filme	atualizado	com	sucesso");
          this.navCtrl.pop();
        }
      );
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
