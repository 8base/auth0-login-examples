# Hosted Login Page Setup

## Auth0 Setup

In order to setup the GraphQL API so that 8base can communicate with your Auth0 account, you need to create a Machine to Machine Application in Auth0 that is authorized to access your Management API.

### Create an Application in Auth0

Log-in to your Auth0 account and navigate to the _Applications_ section of your dashboard. Click on "+ Create Application". Choose "Single Page Application" (or Regular, depending on what you're developing) and give it a name.

Next, in the "Application URIs" set the following inputs to:

1. **Allowed Callback URLs**: `http://localhost:3000/auth/callback`
2. **Allowed Logout URLs**: `http://localhost:3000/logout`
3. **Allowed Web Origins**: `http://localhost:3000`

These paths are totally customizable, though must match the ones that you plan to use in your development/production environments. So for example, if your web app is hosted at `letmelogin.com`, you'd need to whitelabel that domain with the approriate path set for the callback and logout.

### Set up the 8base Authentication Profile

To learn how to set up Authentiction Profiles, please reference the [8base Auth Profile Docs](https://docs.8base.com/docs/8base-console/authentication#your-own-auth0-account).

### Initializing the Auth Client

We use a very simple script to initialize the auth client.

```js
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
```

Once initialized, the module exposes several methods, the important ones for handling basic auth are `authorize()`, `logout()`, and `getAuthorizedData()`.

### Using the GraphQL API

Now, you'll be able to use the `userSignUpWithPassword`, `userLogin`, and the custom `forgotUserPassword` resolvers.
