import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { EMPTY_FORM_VALUES } from '../shared/constants'

const ModalForm = ({isShowModal,  createUser, isUserToUpdate, updateUser, setIsShowModal,SetisUserToUpdate}) => {
    const {handleSubmit, register , reset,formState: {errors}} = useForm()

    const submit = (data) => {
        data.image_url =null
        if(isUserToUpdate){
            updateUser(data, reset)
        }else{
            createUser(data, reset)
        }
    }

    const handleClickCloseModal = ()=> {
        setIsShowModal(false)
        reset(EMPTY_FORM_VALUES)
        SetisUserToUpdate(null)
    }

    useEffect(() => {
        if (isUserToUpdate) {
            reset(isUserToUpdate)
        }
    },[isUserToUpdate])

  return (
    <section className={`fixed z-10 top-0 bottom-0 right-0 left-0 bg-black/60 flex justify-center items-center transition-[opacity_transform] duration-300 ${isShowModal ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"} `}>
        <form onSubmit={handleSubmit(submit)} action="" className='bg-white grid gap-4 p-4 rounded-md w-[419px] max-w-[419px] relative'>
            <button type='button' onClick={handleClickCloseModal} className='font-bold absolute top-4 right-4'>x</button>
            <h2 className='font-bold text-3xl text-[#0F0F2D]'>{isUserToUpdate ? "Editar usuario" : "Nuevo Usuario"}</h2>
            <div className='grid'>
                <label htmlFor="first_name">nombre</label>
                <input placeholder='Juan Carlos' className='outline-none border-[1px] border-[#C3C1C1] p-3 rounded-[6px]' id='first_name' type="text"  {...register("first_name",{
                    required: true
                })}/>
                {errors.first_name && <p className='text-red-500 text-sm'>Este campo es requerido</p>}
            </div>
            <div className='grid'>
                <label htmlFor="last_name">apellido</label>
                <input placeholder='Polo Benavides' className='outline-none border-[1px] border-[#C3C1C1] p-3 rounded-[6px]' id='last_name' type="text" {...register("last_name",{
                    required:true
                })} />
                {errors.last_name && <p className='text-red-500 text-sm'>Este campo es requerido</p>}
            </div>
            <div className='grid'>
                <label htmlFor="email">Email</label>
                <input placeholder='example@gmail.com' className='outline-none border-[1px] border-[#C3C1C1] p-3 rounded-[6px]' id='email' type="email" {...register("email", {
                    required: {
                        value: true,
                        message: "Este campo es requerido"
                    },
                    minLength:{
                        value: 2,
                        message:"minimo 2 caracteres"
                    }
                })} />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            </div>
            <div className='grid'>
                <label htmlFor="password">contraseña</label>
                <input placeholder='123qE!wq' className='outline-none border-[1px] border-[#C3C1C1] p-3 rounded-[6px]' id='password' type="password" {...register("password",{
                    required: {
                        value: true,
                        message: "Este campo es requerido"
                    },
                    pattern:{
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                        message:"no cumples con el formato de contraseña"
                    }
                })} />
                {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
            </div>
            
            <div className='grid'>
                <label htmlFor="birthday">cumpleaños</label>
                <input className='outline-none border-[1px] border-[#C3C1C1] p-3 rounded-[6px]' id='birthday' type="date"  {...register("birthday",{
                    required:true
                })}/>
                {errors.birthday && <p className='text-red-500 text-sm'>Este campo es requerido</p>}
            </div>

            <button className='bg-[#555A88] text-[#FFFFFF] animated flash p-4'>{isUserToUpdate ? "Guardar cambios" : "Agregar nuevo usuario"}</button>
        </form>
    </section>
  )
}

export default ModalForm