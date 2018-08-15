import {Client} from 'pg';

var config = {
  host     : process.env.DB_HOST || 'localhost',
  port     : process.env.DB_PORT || '5432',
  user     : process.env.DB_USER || 'erubin',
  password : process.env.DB_PW || "",
  database : process.env.DB || 'erubin'
};

const client = new Client(config)

client.connect()

class POSTGRESQLClient {

  static execute( sql, args ) {
    console.log("Executing SQL query")
    console.log(sql);
    console.log("with args")
    console.log(args);
    return new Promise( ( resolve, reject ) => {
      client.query( sql, args, ( err, rows ) => {
        if ( err )
          return reject( err, 'query');
        resolve( rows );
      } );
    } );
  }

  static transact() {
    return new Promise( (resolve, reject) => {
      client.query('BEGIN', (err) => {
        if (err) {
          return reject(err, 'transact');
        }

        resolve();
      })
    })
  }

  static commit() {
    return new Promise( (resolve, reject) => {
      client.query('COMMIT', (err) => {
        if (err) {
          return reject(err, 'commit');
        }

        resolve();
      })


    });
  }

  static rollback() {
    return new Promise( (resolve, reject) => {
      client.query('ROLLBACK', (err) => {
        if (err) {
          console.error('Error rolling back client', err.stack);
          reject(err);
        }
        resolve();
      })
    })
  }

  static close() {
      return new Promise( ( resolve, reject ) => {
          client.end( err => {
              if ( err )
                  return reject( err );
              resolve();
          } );
      } );
  }
}

export default POSTGRESQLClient;
