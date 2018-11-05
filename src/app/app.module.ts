import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Pipoca } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GenerosPage } from '../pages/generos/generos';
import { PopularidadePage } from '../pages/popularidade/popularidade';
import { LancamentoPage } from '../pages/lancamento/lancamento';
import { IntroPage } from '../pages/intro/intro';
import { SQLite } from '@ionic-native/sqlite';
import { MovieProvider } from '../providers/movie/movie';

import { HttpModule } from "@angular/http";
import { DatabaseProvider } from '../providers/database/database';
import { FilmeProvider } from '../providers/filme/filme';
import { AdicionaFilmePage } from '../pages/adiciona-filme/adiciona-filme';
import { ExibeFilmesPage } from '../pages/exibe-filmes/exibe-filmes';
import { AtualizaFilmePage } from '../pages/atualiza-filme/atualiza-filme';
import { GeneroProvider } from '../providers/genero/genero';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    Pipoca,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GenerosPage,
    PopularidadePage,
    LancamentoPage,
    IntroPage,
    AdicionaFilmePage,
    ExibeFilmesPage,
    AtualizaFilmePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Pipoca),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Pipoca,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GenerosPage,
    PopularidadePage,
    LancamentoPage,
    IntroPage,
    AdicionaFilmePage,
    ExibeFilmesPage,
    AtualizaFilmePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieProvider, SQLite,
    DatabaseProvider,
    FilmeProvider,
    GeneroProvider,
    Network,
  ]
})
export class AppModule { }
