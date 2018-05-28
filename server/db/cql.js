const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], keyspace: 'social_attitudes' });

class CassandraClient {

  static execute( query, args ) {
        return client.execute(query, args);
    }
}

export default CassandraClient;
