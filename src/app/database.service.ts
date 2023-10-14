import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public test = "test";
  public database: SQLiteObject | null = null;

  constructor(private sqlite: SQLite, private httpClient: HttpClient, private sqlitePorter: SQLitePorter) {

  }

  initializeDatabase() {
    this.sqlite.create({ name: 'dbinotropi.db', location: 'default' })
      .then((db: SQLiteObject) => {
        this.database = db;

        // Check if the database already exists
        this.database.executeSql("SELECT name FROM sqlite_master WHERE type='table'", [])
          .then(data => {
            if (data.rows.length === 0) {
              // The database is empty, import your SQL data
              this.httpClient.get('assets/db/CalcolatoreInotropi.sql', { responseType: 'text' })
                .subscribe(sql => {
                  this.sqlitePorter.importSqlToDb(this.database, sql)
                    .then(() => {
                      console.log('Database initialized with data.');
                    })
                    .catch(error => {
                      console.error('Error importing data:', error);
                    });
                });
            } else {
              console.log('Database already exists.');
            }
          })
          .catch(error => {
            console.error('Error checking for existing tables:', error);
          });
      })
      .catch(error => {
        console.error('Error opening the database:', error);
      });
  }

  public doNothing() {
    console.log("doNothing");
  }
}
