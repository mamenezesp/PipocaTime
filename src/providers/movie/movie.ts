import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Retorna o json a ser trabalhado na response
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MovieProvider {

  private baseApiPath = 'https://api.themoviedb.org/3'; //Endpoint base que está sendo usado

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
    //O Http faz um get para a API passando os parametros necessários
    return this.http.get(this.baseApiPath + '/movie/latest?api_key=' + this.getApiKey());
  }

  getPopularMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key='
      + this.getApiKey());
  }

  getGenres() {
    return this.http.get(this.baseApiPath + '/genre/movie/list?api_key='
      + this.getApiKey());
  }

  getApiKey(): string {
    return '62f054ec77aa6043241978190e5bc672';
  }

}
