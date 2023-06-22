import React from 'react'
import './Button.style.css'

const Button = ({language}) => {
  return (
    <div className='btn-language'>
        <p>{language.name}</p>
        <img src={language.img} alt="" />
    </div>
  )
}

export default Button