import React from 'react'
import auth from '../../utils/auth'

/* Callback handles the redirect and parses query hash with auth results. */
export default class Callback extends React.Component {
  /* Component constructor method */
  constructor (props) {
    super(props)
    this.state = {}
  }
  /**
   * When component mounts, get auth result and add it to state.
   *
   * In a method like this one you may want to store the idToken to
   * a global state and redirect the user to a home page, or handle
   * authentication however you choose!
   */
  componentDidMount () {
    auth
      .getAuthorizedData()
      .then(authResult => {
        this._asyncRequest = null
        this.setState({ authResult })
      })
      .catch(err => {
        this.setState({ authResult: err })
      })
  }

  /* Component render method */
  render () {
    /* Display authReult as a list */
    const AuthResults = () => (
      <ul className='list-group'>
        {Object.entries(this.state.authResult || {}).map((entry, index) => (
          <li key={'k_' + index} className='list-group-item'>
            <strong>{entry[0]}</strong> = {JSON.stringify(entry[1], null, 2)}
          </li>
        ))}
      </ul>
    )

    /* Render instructions */
    return (
      <div className='view'>
        <h1 className='mb-4'>Handling Auth Callback</h1>

        <p>
          This component should parse the auth result from the hash params. You
          can then have your app redirect the user once successfully done, or do
          whatever!
        </p>

        <p>
          <button onClick={() => auth.logout()}>Logout</button>
        </p>

        {this.state.authResult === undefined ? (
          <h3>Loading auth result...</h3>
        ) : (
          <AuthResults />
        )}
      </div>
    )
  }
}
