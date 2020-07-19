import gql from 'graphql-tag'

/* Login the user with email and password */
export const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!, $authProfileId: ID!) {
    userLogin(
      data: {
        email: $email
        password: $password
        authProfileId: $authProfileId
      }
    ) {
      auth {
        refreshToken
        idToken
      }
    }
  }
`

/* Sign up the user with email and password */
export const SIGNUP_MUTATION = gql`
  mutation($email: String!, $password: String!, $authProfileId: ID!) {
    userSignUpWithPassword(
      user: { email: $email }
      password: $password
      authProfileId: $authProfileId
    ) {
      id
      email
      createdAt
    }
  }
`

/* Send user password reset email */
export const FORGOT_PASSWORD_MUTATION = gql`
  mutation($email: String!) {
    userForgotPassword(email: $email) {
      success
    }
  }
`
