import { Auth, AUTH_STRATEGIES } from '@8base/auth'

/* Initiate the auth client and export */
export default Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_AUTH0
  },
  {
    domain: '<AUTH0_DOMAIN>',
    clientId: '<AUTH0_CLIENT_ID>',
    redirectUri: `${window.location.origin}/auth/callback`,
    logoutRedirectUri: `${window.location.origin}/logout`
  }
)
