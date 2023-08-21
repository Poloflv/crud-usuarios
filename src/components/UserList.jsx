import React from 'react'
import UserCard from './UserCard'

const UserList = ({users, deleteUser, handleClickUpdateUser}) => {
  return (
    <section className='pt-10 grid gap-6 justify-center grid-cols-[repeat(auto-fill,_300px)] max-w-[1500px] mx-auto'>
        {
            users.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteUser} handleClickUpdateUser={handleClickUpdateUser}/>)
        }
    </section>
  )
}

export default UserList