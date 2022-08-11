import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const url = 'https://graphql.swappi.io/subgraphs/name/swappi-dex/swappi';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: url,
    }),
    cache: new InMemoryCache(),
});
