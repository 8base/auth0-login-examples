import { ManagementClient, AuthenticationClient } from 'auth0'

const domain = '<AUTH0_DOMAIN>'
const clientId = '<AUTH0_CLIENT_ID>'
const clientSecret = '<AUTH0_CLIENT_SECRET>'

const auth0Management = new ManagementClient({
  domain,
  clientId,
  clientSecret
})

const auth0Authentication = new AuthenticationClient({
  domain,
  clientId
})

export { auth0Management, auth0Authentication }
