import mysql from 'mysql';
var config = {
  host     : process.env.DB_HOST,
  port     : process.env.DB_PORT,
  user     : process.env.DB_USER,
  password : process.env.DB_PW,
  database : process.env.DB
};

var connection = mysql.createConnection( config );

class MySQLClient {

  static execute( sql, args ) {
    // console.log("Executing SQL query")
    // console.log(sql);
    // console.log("with args")
    // console.log(args);
    return new Promise( ( resolve, reject ) => {
      connection.query( sql, args, ( err, rows ) => {
        if ( err )
          return reject( err, 'query');
        resolve( rows );
      } );
    } );
  }

  static transact() {
    return new Promise( (resolve, reject) => {
      connection.beginTransaction((err) => {
        if (err) {
          return reject(err, 'transact');
        }

        resolve();
      })
    })
  }

  static commit() {
    return new Promise( (resolve, reject) => {
      connection.commit((err) => {
        if (err) {
          return reject(err, 'commit');
        }

        resolve();
      })


    });
  }

  static rollback() {
    return new Promise( (resolve, reject) => {
      connection.rollback(() => {
        resolve();
      })
    })
  }

  static close() {
      return new Promise( ( resolve, reject ) => {
          connection.end( err => {
              if ( err )
                  return reject( err );
              resolve();
          } );
      } );
  }
}

export default MySQLClient;
