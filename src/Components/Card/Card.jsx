import useState  from 'react'
import './Card.style.css'


const Card = ({item}) => {
  
  const redirect = (url)=> {
    window.open(url, '_blank')
  }
  
  return (
    <div className="card ">
      <img className='card-img' src={item.logo} alt="" />
     <div className='d-flex card-contain'>
      <h3 className='card-title '>{item.title}</h3>
      <h4>Año: {item.año}</h4>
      <h5>Estado: {item.estado}</h5>
     </div>
     <button onClick={()=>redirect(item.link)} className='button '>Ver Certificado</button>
            </div>
        
      
       
       
   
  )
}

export default Card