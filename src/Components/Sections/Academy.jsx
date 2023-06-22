import React from 'react'
import { academy } from '../../Utils/Projects'
import './Sections-styles.css'
import Card from '../Card/Card'

const Academy = () => {
  return (
    <div  className='section-separation '>
      <div className='container '>

        <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay='500' className='title-section'>Academy</h2>
        <article className='d-flex academy' >
        {
          academy.map( course => 
            <Card data-aos="fade-right" data-aos-duration='3000' key={course.title} item={course}/>
          )
        }
        </article>
      </div>
    </div>
  )
}

export default Academy