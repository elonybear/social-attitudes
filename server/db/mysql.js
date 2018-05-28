import mysql from 'mysql';
var config = {
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'social_attitudes'
};

var connection = mysql.createConnection( config );

class MySQLClient {

  static execute( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
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
