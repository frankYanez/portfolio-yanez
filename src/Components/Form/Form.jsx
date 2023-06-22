import React, { useRef, useState } from 'react'
import './Form.style.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'


const Form = () => {
  const [nombre , setNombre] = useState('')
  const [email , setEmail] = useState('')
  const [mensaje , setMensaje] = useState('')
  const form = useRef()
  const service = import.meta.env.SERVICE_ID
  const template = import.meta.env.TEMPLATE
  const publicKey = import.meta.env.PUBLIC_KEY


  const notify = ()=> toast("Mensaje Enviado",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",

  })

  const sendMessagge = (e) =>{
    e.preventDefault()
    

    emailjs.sendForm("service_snuzn8r","template_e5rj25s",form.current,'jHfhn2-y8lqvj9Lst')
    

    setNombre('')
    setEmail('')
    setMensaje('')
  }
  // dotenv.config();
  const contact = () =>{
    sendMessagge()
    
  }

  

  
  return (
  
<div className="login-box">
  <p>Contactame</p>
  <form ref={form} onSubmit={sendMessagge}>
    <div className="user-box">
      <input onChange={(e)=> setNombre(e.target.value)} required value={nombre} name="user_name" type="text"/>
      <label>Nombre</label>
    </div>
    <div className="user-box">
      <input onChange={(e)=> setEmail(e.target.value)} required value={email}  name="user_email" type="email"/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input onChange={(e)=> setMensaje(e.target.value)} value={mensaje} required name="message" type="message"/>
      <label>Mensaje</label>
    </div>
    <button onClick={notify}  type='submit' className='button'>Enviar</button>
    <ToastContainer/>
  </form>
  
</div>
    

  )
}

export default Form