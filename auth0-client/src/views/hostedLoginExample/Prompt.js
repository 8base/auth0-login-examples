import React from 'react'
import auth from '../../utils/auth'

export default function HostedLoginRedirect () {
  return (
    <div className='view'>
      <h1 className='mb-4'>Hosted Login With Redirect</h1>

      <p>
        When using hosted login with redirect authentication, your user will be
        sent to another url to authenticate. Once successfully authenticated,
        they'll be redirected back to your application with their auth results
        as has params in the url.
      </p>

      <p>Click the button below to try it out!</p>

      <button onClick={() => auth.authorize()}>Login / Signup</button>
    </div>
  )
}
