import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from '@apollo/client/link/rest';

const restLink = new RestLink({
  uri: 'http://localhost:4200/', // Il tuo endpoint base per le chiamate REST
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
