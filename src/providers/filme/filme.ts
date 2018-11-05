import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Filme } from '../../modelo/filme';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class FilmeProvider {

  constructor(private dbProvider: DatabaseProvider) {
  }
  public inserir(filme: any) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "INSERT	INTO	filme	(title,	overview,	release_date)	VALUES	(?,	?,	?)";
        let parametros = [filme.title, filme.overview, filme.release_date];
        return db.executeSql(sql, parametros).
          catch((e) => {
            console.log(e);
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public listar() {
    //abre	a	base
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        //faz	o	select
        let sql = "SELECT	*	FROM	filme";
        return db.executeSql(sql, []).
          then((data: any) => {
            //se	tiver	alguma	linha	na	tabela
            if (data.rows.length > 0) {
              let filmes: Filme[] = [];
              //pega	cada	linha	e	coloca	num	vetor
              for (let i = 0; i < data.rows.length; i++) {
                filmes.push(data.rows.item(i));
              }
              return filmes;
            }
            else
              //devolve	vetor	vazio	se	a	tabela	estiver	vazia
              return [];
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public apagar(filme: Filme) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "DELETE	FROM	filme	WHERE	id	=	?";
        //será	colocado	no	lugar	do	?
        let param = [filme.id];
        return db.executeSql(sql, param);
      });
  }

  public atualizar(filme: Filme) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "UPDATE	filme	SET	title	=	?,	overview	=	?,	release_date	=	?	WHERE	id	=	?";
        let param = [filme.title, filme.overview, filme.release_date, filme.id];
        return db.executeSql(sql, param);
      });

  }
}
