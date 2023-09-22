import React from 'react'
import './user.css'

const User = ({id, email, name}) => {
  return (
    <div>
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
        </div>
    </div>
  )
}

export default User