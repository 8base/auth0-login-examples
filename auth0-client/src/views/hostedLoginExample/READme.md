# Hosted Login Page Setup

## Auth0 Setup

In order to setup the GraphQL API so that 8base can communicate with your Auth0 account, you need to create a Machine to Machine Application in Auth0 that is authorized to access your Management API.

### Create an Application in Auth0

Log-in to your Auth0 account and navigate to the _Applications_ section of your dashboard. Click on "+ Create Application". Choose "Single Page Application" (or Regular, depending on what you're developing) and give it a name.

Next, in the "Application URIs" set the following inputs to:

1. **Allowed Callback URLs**: `http://localhost:3000/auth/callback`
2. **Allowed Logout URLs**: `http://localhost:3000/logout`
3. **Allowed Web Origins**: `http://localhost:3000`

These paths are totally customizable, though must match the ones that you plan to use in your development and production environments. So for example, if your web app was hosted at `letmelogin.com`, you'd need to white label that domain with the approriate path set for the callback and logout.

### Initializing the Auth Client

By default, there isn't a forgot user password resolver on the API. We need to add it, as it's functionality may be somewhat specific to your project.

Look in the `auth0-fns` directory to see the code that's required. Essentially, we're initializing the Auth0 SDK and then importing it into our function handler. Here, we're simply sending the user a password reset email.

That said, you'd be able to do whatever you want through the management API here.9

To deploy the function to your 8base workspace, just run `8base deploy` in the root of the `auth0-fns` directory.

### Using the GraphQL API

Now, you'll be able to use the `userSignUpWithPassword`, `userLogin`, and the custom `forgotUserPassword` resolvers.
