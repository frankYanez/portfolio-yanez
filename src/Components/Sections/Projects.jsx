import React from 'react'
import projects from '../../Utils/Projects'
import Cardprojects from '../CardProjects/Cardprojects'


const Projects = () => {
  return (
    <div id='projects' className='section-separation container'>
       <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay='500' className='title-section'>Projects</h2>
      <section className='d-flex projects'>
       
          {
            projects.map( project =>
              <Cardprojects key={project.name}  project={project} />
              )
          }
        
        
      </section> 

    </div>
  )
}

export default Projects