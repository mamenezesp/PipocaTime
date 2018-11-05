import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Genero } from '../../modelo/genero';



@Injectable()
export class GeneroProvider {

  constructor(private dbProvider: DatabaseProvider) {
  }

  public inserir(genero: any) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "INSERT	INTO	genero	(name)	VALUES	(?)";
        let parametros = [genero.name];
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
        let sql = "SELECT	*	FROM	genero";
        return db.executeSql(sql, []).
          then((data: any) => {
            //se	tiver	alguma	linha	na	tabela
            if (data.rows.length > 0) {
              let generos: Genero[] = [];
              //pega	cada	linha	e	coloca	num	vetor
              for (let i = 0; i < data.rows.length; i++) {
                generos.push(data.rows.item(i));
              }
              return generos;
            }
            else
              //devolve	vetor	vazio	se	a	tabela	estiver	vazia
              return [];
          });
      }).catch((e) => {
        console.log(e);
      });
  }
}
