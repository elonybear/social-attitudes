import {
	Environment,
	Network,
	RecordSource,
	Store
} from 'relay-runtime';
import getNetworkLayer from 'relay-mock-network-layer';
import schema from './graphql.schema.json';

const network = Network.create(getNetworkLayer({
    schema,
    // pass custom mocks as documented in graphql-tools
    // http://dev.apollodata.com/tools/graphql-tools/mocking.html#Customizing-mocks
    mocks: {
        Geography: () => ({
            id: '2',
            countries: [{
                abbreviation: 'US',
                name: 'United States'
            }, {
                abbreviation: 'UK',
                name: 'United Kingdom'
            }],
                usStates: [{
                abbreviation: 'NY',
                name: 'New York'
            }, {
                abbreviation: 'NJ',
                name: 'New Jersey'
            }]
        }),
        Address: () => ({
            country: 'US',
            city: 'New York',
            state: 'NY',
            zipCode: '10012',
        })
    }
}));

// Create an environment using this network:
export const store = new Store(new RecordSource());
export const environment = new Environment({network, store});
