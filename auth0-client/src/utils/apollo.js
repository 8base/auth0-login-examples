import { ApolloClient, InMemoryCache } from '@apollo/client'

/* Initiate the Apollo client and export */
export default new ApolloClient({
  uri: '<8BASE_WORKSPACE_ID>',
  cache: new InMemoryCache()
})
