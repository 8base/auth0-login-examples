# GraphQL API Auth Setup

## Auth0 Setup

In order to setup the GraphQL API so that 8base can communicate with your Auth0 account, you need to create a Machine to Machine Application in Auth0 that is authorized to access your Auth0 Management API.

### Create a Machine to Machine Application

Log-in to your Auth0 account and navigate to the _Applications_ section of your dashboard. Click on "+ Create Application". Choose "Machine to Machine Applications" and give it a name, like "8base Workspace".

Next, select the "Auth0 Management API" as your authorized API and under scopes, ensure that `read:users` and `create:users` and selected.

Once done, click _Authorize_.

Now on the _Settings_ page of your new Machine to Machine Application, scroll all the way to the bottom of the page and open the _Advanced Settings_.

Under _Grant Types_, ensure that "Client Credentials" and "Password" are checked.

### Set up the 8base Authentication Profile

To learn how to set up Authentiction Profiles, please reference the [8base Auth Profile Docs](https://docs.8base.com/docs/8base-console/authentication#your-own-auth0-account).

### Deploying the Forgot User Password Resolver

By default, there isn't a forgot user password resolver on the 8base GraphQL API. We need to add it, as it's functionality may be somewhat specific to your project.

Look in the `auth0-fns` directory to see the code that's required. Essentially, we're initializing the Auth0 SDK and then importing it into our function handler. Here, we're simply sending the user a password reset email.

That said, you'd be able to do whatever you want through the management API.

To deploy the function to your 8base workspace, just run `8base deploy` in the root of the `auth0-fns` directory.

### Using the GraphQL API

Now, you'll be able to use the `userSignUpWithPassword`, `userLogin`, and the custom `forgotUserPassword` resolvers.
