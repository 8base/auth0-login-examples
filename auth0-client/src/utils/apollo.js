import { ApolloClient, InMemoryCache } from '@apollo/client'

/* Initiate the Apollo client and export */
export default new ApolloClient({
  uri: 'https://api.8base.com/ck9cyofef002607jt6wjj5r20',
  cache: new InMemoryCache()
})
