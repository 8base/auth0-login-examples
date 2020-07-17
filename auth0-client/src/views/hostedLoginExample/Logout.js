import React from 'react'
import { Link } from 'react-router-dom'

/* Logout handles the logout. */
export default class Logout extends React.Component {
  /* Component render method */
  render () {
    /* Render instructions */
    return (
      <div className='view'>
        <h1 className='mb-4'>Logout Handler</h1>

        <p>This component was used to handle the logout!</p>

        <p>
          <Link className='nav-link' to='/hosted-redirect'>
            Back to Login Page
          </Link>
        </p>
      </div>
    )
  }
}
