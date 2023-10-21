// pages/_app.tsx
// import { ApolloProvider } from '@apollo/client';
import client from '../../apolloClient.ts'; // Assicurati di aggiornare il percorso al tuo file di configurazione Apollo
import { AuthProvider } from '../app/utils/withAuth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
