import { ManagementClient, AuthenticationClient } from 'auth0'

const domain = 'dev-onq6cq26.auth0.com'
const clientId = 'U4pQUzcWDhJUMAYkcCKUMjjA3EU3BLAF'
const clientSecret = 'siHi4M4RVR_REe3qvv6hErddHtAZOoTkj_7SDX7Srq_d7YzCOIQxHOpsX2QkJY1j'

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
