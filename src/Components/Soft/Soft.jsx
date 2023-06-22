import React from 'react'
import './Soft.styles.css'

const Soft = ({item}) => {
  return (
 
         <div className='container-soft'>
            <div  className='d-flex soft-title'>
            <img className='icon-soft' src={item.icon} alt="" />
              <h3>{item.title}</h3>
            </div>
            
              <p>{item.descripcion}</p>
            </div>

  )
}

export default Soft