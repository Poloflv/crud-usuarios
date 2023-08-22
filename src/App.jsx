import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ModalForm from './components/ModalForm'
import { EMPTY_FORM_VALUES } from './shared/constants'
import UserList from './components/UserList'

  const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isUserToUpdate, SetisUserToUpdate] = useState(null)
  const [users, setUsers] = useState([])

  const  getAllUsers = () => {
    axios
    .get(BASE_URL + "users/")
    .then(({data}) => setUsers(data))
    .catch((err) => console.log(err))
  }

  const createUser = (newUser, reset) => {
    axios
    .post(BASE_URL + "users/", newUser)
    .then(({data}) => {
      getAllUsers()
      setIsShowModal(false)
      reset(EMPTY_FORM_VALUES)
    })
    .catch((err) => console.log(err))
  }

  const deleteUser = (idUser) => {
    axios
    .delete(BASE_URL + `users/${idUser}/`)
    .then(({data}) => {
      getAllUsers()
    })
    .catch((err) => console.log(err))
  }

  const updateUser = (userUpdated, reset)=>{
    axios
    .patch(BASE_URL + `users/${isUserToUpdate.id}/`, userUpdated)
    .then(({data}) => {
      getAllUsers()
      setIsShowModal(false)
      reset(EMPTY_FORM_VALUES)
      SetisUserToUpdate(null)
    })
    .catch((err) => console.log(err))
  }


  const handleClickUpdateUser = (user) => {
    setIsShowModal(true)
    SetisUserToUpdate(user)
  }

  const handleClickOpenModal = () => {
    setIsShowModal(true)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <section className='color-change-2x min-h-screen'>
    <header className='flex flex-col justify-between p-16 sm:flex-row '>
    <h2 className='font-bold text-5xl blur-in-expand '>Usuarios</h2>
    <button className='bg-[#555A88] toStretch text-[#FFFFFF] p-4 mt-4 sm:mt-0' onClick={handleClickOpenModal}><i className='bx bx-plus pr-2 pl-4'></i>Crear nuevo usuario</button>
    </header>
    <ModalForm isShowModal={isShowModal}  createUser={createUser} isUserToUpdate={isUserToUpdate} updateUser={updateUser} SetisUserToUpdate={SetisUserToUpdate} setIsShowModal={setIsShowModal}/>
    <UserList users={users} deleteUser={deleteUser} handleClickUpdateUser={handleClickUpdateUser}/>
    </section>
  )
}

export default App
