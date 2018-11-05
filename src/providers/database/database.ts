import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Injectable()
export class DatabaseProvider {

  constructor(private db: SQLite) {
  }
  openDatabase() {
    return this.db.create({
      name: "filmes.db",
      location: "default"
    });
  }
  createDatabase() {
    return this.openDatabase().
      then((db: SQLiteObject) => {
        this.createTabelaFilmes(db);
        this.createTabelaGeneros(db);
      });
  }
  createTabelaFilmes(db: SQLiteObject) {
    let sql: string = "CREATE	TABLE	IF	NOT	EXISTS	filme	(id	INTEGER	PRIMARY	KEY	AUTOINCREMENT,	" +
      "	title	VARCHAR	(200),	overview	VARCHAR(400),	release_date	VARCHAR(200))";
    db.executeSql(sql);//{poderia	conter	parâmetros,	por	isso	o	{}}
  }

  createTabelaGeneros(db: SQLiteObject) {
    let sql: string = "CREATE	TABLE	IF	NOT	EXISTS	genero	(id	INTEGER	PRIMARY	KEY	AUTOINCREMENT,	" +
      "	name	VARCHAR	(200))";
    db.executeSql(sql);
  }
}
