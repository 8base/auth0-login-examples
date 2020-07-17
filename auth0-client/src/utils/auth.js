import { Auth, AUTH_STRATEGIES } from '@8base/auth'

/* Initiate the auth client and export */
export default Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_AUTH0
  },
  {
    domain: 'dev-onq6cq26.auth0.com',
    clientId: 'AIsXjUCfS0A7jzPfRJaSsQ84B08eIhUy',
    redirectUri: `${window.location.origin}/auth/callback`,
    logoutRedirectUri: `${window.location.origin}/logout`
  }
)
