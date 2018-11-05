import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Filme } from '../../modelo/filme';
import { FilmeProvider } from '../../providers/filme/filme';

/**
 * Generated class for the AdicionaFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-filme',
  templateUrl: 'adiciona-filme.html',
})
export class AdicionaFilmePage {
  public filme: Filme;

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmeProvider: FilmeProvider, private toastCtrl:	ToastController) {
    this.filme = new Filme();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaFilmePage');
  }
  cadastraFilme() {
    console.log(this.filme);
    this.filmeProvider.inserir(this.filme);
    this.exibirToast ("Filme	cadastrado	com	sucesso.");
    this.navCtrl.pop();
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
