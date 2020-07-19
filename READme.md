# Configuring your own Auth0 Account on 8base

One of the most critical steps involved in any application project is setting up authentication. Unfortunately, it is never as easy as writing a basic HTML email/password form.

There are dozens of techniques to securely - and insecurely - authenticate users in 2020, as well as more than nessessary authentication service providers. Because of this reality, as well as other security concerns, many companies and developers have decoupled authentication from their applications entirely.

At 8base, we aim to have authentication be as flexible as possible. Pretty much, any authentication provider that's able to issue a valid [JWT](https://jwt.io) can be configured to work with 8base. This allows you, the developer, to have a ton of freedom and flexibility in building your own custom authentication flows.

### Repo

In the repo, we have two examples of authentication being used in one React.js App.

1. GraphQL API Only Auth - `auth0-client\src\views\graphqlApiExample\READme.md`
2. Hosted Login page w/ Redirect - `auth0-client\src\views\hostedLoginExample\READme.md`
