import React from 'react'

const User = ({ user }) => {
    return (
        <div className='card'>
            <h4>{user.name}</h4>
            <h5>{user.email}</h5>
            <h4>{user.address.city}</h4>
        </div>
    )
}

export default User