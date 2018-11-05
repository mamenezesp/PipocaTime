import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { IntroPage } from '../pages/intro/intro';


@Component({
  templateUrl: 'app.html'
})
export class Pipoca {
  rootPage: any = IntroPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      //	Okay,	so	the	platform	is	ready	and	our	plugins	are	available.
      //	Here	you	can	do	any	higher	level	native	things	you	might	need.
      statusBar.styleDefault();
      dbProvider.createDatabase().then(() => {
        //para	abrir	a	home	page	somente	depois	de	criar	a	base
        this.abrirHomePage(splashScreen);
      }).catch((e) => {
        //log	caso	algo	falhe
        console.log(e);
        this.abrirHomePage(splashScreen);
      });
    });
  }
  private abrirHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    //configura	a	root	page	depois	de	criar	o	bancos
    this.rootPage = IntroPage;
  }
}
