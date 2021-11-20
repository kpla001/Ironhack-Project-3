import React from 'react'
import Profile from '../components/Profile/Profile'

const ProtectedPage = ({ user }) => {
  console.log(user)
  return (
    <div>
      <Profile user={user} cookbooks={user.cookbooks} />
    </div>
  )
}

export default ProtectedPage
