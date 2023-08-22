// pages/_app.tsx
import { ApolloProvider } from '@apollo/client';
import client from '../../apolloClient.ts'; // Assicurati di aggiornare il percorso al tuo file di configurazione Apollo

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
