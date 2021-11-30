import React from 'react'
import Profile from '../components/Profile/Profile'
import '../components/Profile/Profile.css'

const ProtectedPage = ({ user }) => {
  console.log(user)
  return (
    <div className="profilePage">
      <Profile user={user} cookbooks={user.cookbooks} />
    </div>
  )
}

export default ProtectedPage
