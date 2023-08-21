import React from 'react'

const UserCard = ({user,deleteUser, handleClickUpdateUser}) => {
  return (
    <article className='border-[1px] border-[#E5E5E5] p-4 rounded-md'>
        <ul>
            <li className='font-medium text-2xl text-[#0F0F2D]'>{user.first_name +" " + user.last_name}</li>
            <li className='text-[#D3D3D3] font-normal text-base mt-4'>CORREO <br /> <span className='text-[#302F2F]'>{user.email}</span></li>
            <li className='text-[#D3D3D3] font-normal text-base'>Cumpleaños <br /> <span className='text-[#302F2F]'><i className='bx bx-gift mr-2'></i>{user.birthday}</span></li>
        </ul>
        <div className='py-3'>
        <hr/>
        </div>
        <section className='flex justify-end'>
          <button onClick={()=>deleteUser(user.id)} className='bg-[#D85D5D] p-4 rounded-md '><i className='bx bx-trash text-white '></i></button>
          <button onClick={()=>handleClickUpdateUser(user)} className='bg-[#BDBDBD] ml-2 p-4 rounded-md'><i className='bx bx-pencil' ></i></button>
        </section>
    </article>
  )
}

export default UserCard