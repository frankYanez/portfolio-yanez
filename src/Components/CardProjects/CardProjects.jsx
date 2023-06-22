
import './CardProjects.styles.css'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Cardprojects = ({project}) => {
  
  return (
    <div className='shadow project-card'>
      <img className='project-img' src={project.img} alt="" />
      <div className='content-card'>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      
      <div className='d-flex project-btn-container'>
        <button className='button'>Ver</button>
        <button className='button'><AiFillGithub className='git-icon'/></button>
      </div>
      </div>
      
    </div>
  )
}

export default Cardprojects
