import React from 'react'
import User from './Card';


const Users = ({data}) => {
  return (
    <div className="cards">
      {data.map((obj) => {
        return <User obj={obj} key={obj.id} />;
      })}
    </div>
  )
}

export default Users