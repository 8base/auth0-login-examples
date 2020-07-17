import gql from 'graphql-tag'

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
export const FORGOT_PASSWORD_MUTATION = gql`
  mutation($email: String!) {
    userForgotPassword(email: $email) {
      success
    }
  }
`
