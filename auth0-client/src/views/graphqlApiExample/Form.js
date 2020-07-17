import React from 'react'
import apollo from '../../utils/apollo'

/* GraphQL Mutations */
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  FORGOT_PASSWORD_MUTATION
} from '../../utils/graphql'

/**
 * With this component, we're interfacing with the 8base GraphQL
 * API to run sign-up and sign-in forms.
 */
export default class GraphqlApiAuth extends React.Component {
  /* Class constructor method */
  constructor (props) {
    super(props)

    /* Bind fn handlers */
    this.handleAuth = this.handleAuth.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      /* Required Signup attributes */
      form: {
        email: '',
        password: '',
        authProfileId: 'ckcntfgqy00ko08ib780ha5vw'
      },
      /* Component specific attributes */
      show: 'login',
      login: {
        fn: this.handleAuth,
        btn: 'Sign In',
        prompt: 'Test Sign In',
        mutation: LOGIN_MUTATION
      },
      signup: {
        fn: this.handleAuth,
        btn: 'Sign Up',
        prompt: 'Test Sign Up',
        mutation: SIGNUP_MUTATION
      },
      reset: {
        fn: this.handleAuth,
        btn: 'Reset Password',
        prompt: 'Test Reset Password',
        mutation: FORGOT_PASSWORD_MUTATION
      }
    }
  }

  /* Execute the GraphQL Mutation and set result */
  async execute (options) {
    let result

    try {
      result = await apollo.mutate(options)
    } catch (error) {
      result = error
    }

    this.setState({ authResult: result })
  }

  /* Handles changes on form with state */
  handleChange (event) {
    let form = this.state.form

    form[event.target.name] = event.target.value

    this.setState({ form })
  }

  /* Submits form and sets result or error to auth result */
  async handleAuth (event) {
    event.preventDefault()

    this.execute({
      mutation: this.state[this.state.show].mutation,
      variables: this.state.form
    })
  }

  /* Sends mutation for password reset email */
  async handleReset (event) {
    event.preventDefault()

    this.execute({
      mutation: this.state[this.state.show].mutation,
      variables: {
        email: this.state.form.email
      }
    })
  }

  /* Component render method */
  render () {
    const form = this.state[this.state.show]

    /* Display authReult as a list */
    const AuthResults = () => (
      <ul className='list-group'>
        {Object.entries(this.state.authResult || {}).map((entry, index) => (
          <li key={'v' + index} className='list-group-item'>
            <strong>{entry[0]}</strong> = {JSON.stringify(entry[1], null, 2)}
          </li>
        ))}
      </ul>
    )

    /* Render form */
    return (
      <div className='view'>
        <h1 className='mb-4'>GraphQL API Auth ({form.btn})</h1>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <a
              href='#'
              className='nav-link'
              onClick={() => this.setState({ show: 'login' })}
            >
              {this.state.login.prompt}
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#'
              className='nav-link'
              onClick={() => this.setState({ show: 'signup' })}
            >
              {this.state.signup.prompt}
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#'
              className='nav-link'
              onClick={() => this.setState({ show: 'reset' })}
            >
              {this.state.reset.prompt}
            </a>
          </li>
        </ul>

        <form className='my-4' onSubmit={form.fn}>
          <div className='form-group'>
            <label>Email</label>
            <input
              key='e1'
              type='email'
              name='email'
              placeholder='Email'
              current-email='true'
              className='form-control'
              value={this.state.form.email}
              onChange={this.handleChange}
            />
          </div>

          {this.state.show !== 'reset' ? (
            <div className='form-group'>
              <label>Password</label>
              <input
                key='p1'
                type='password'
                name='password'
                placeholder='Password'
                current-password='true'
                className='form-control'
                value={this.state.form.password}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            <></>
          )}

          <button type='submit' className='btn btn-primary'>
            {form.btn}
          </button>
        </form>

        {/* Display auth results */}
        {this.state.authResult && <AuthResults />}
      </div>
    )
  }
}
