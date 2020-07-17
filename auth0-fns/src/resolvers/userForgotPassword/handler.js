import { auth0Management, auth0Authentication } from '../../utils/auth0.js'

/* Send a password reset email to the user */
async function userForgotPassword (event) {
  const { email } = event.data

  let user

  try {
    [user] = await auth0Management.getUsersByEmail(email)
  } catch (error) {
    console.error(error)

    return {
      data: {
        success: false
      },
      errors: [error]
    }
  }

  if (!user) {
    const error = new Error('No such a user.')

    console.error(error)

    return {
      data: {
        success: false
      },
      errors: [error]
    }
  }

  try {
    await auth0Authentication.requestChangePasswordEmail({
      email,
      connection: user.identities[0].connection
    })
  } catch (error) {
    console.error(error)

    return {
      data: {
        success: false
      },
      errors: [error]
    }
  }

  return {
    data: {
      success: true
    }
  }
}

export default userForgotPassword
