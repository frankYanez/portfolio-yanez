import React from 'react'
import './Sections-styles.css'

const AboutMe = () => {
  return (
    <div className=' about-section'>

      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay='500'className='title-section '>Acerca de mi</h2>
      <article className='about-me__content d-flex container'>
      
        
        <div id='about-me' className='d-flex about-me'>
        <img className='about-photo ' src="/assets/photo-header.png" alt="" />
        <div className='d-flex f-column'>
        <p> <span className='hi'>Hola!</span> Permiteme contarte que soy nacido en la ciudad de Barranquilla, Colombia. Hace 11 años decidi mudarme a Argentina para estudiar, y encontre mi lugar en Tandil, provincia de Buenos aires. Tengo 28 años y hace 1 año que estudio Programacion Web full stack y me considero un gran apasionado de la tecnologia.
        
        <br/>
        <br/>

        Estoy emocionado de formar parte de equipos colaborativos y creativos, donde pueda aportar mis habilidades técnicas y trabajar en conjunto para alcanzar los objetivos establecidos. <br/>

        Me encanta el Futbol y amo mi hobby, ser DJ.
        Soy egresado de un Colegio con enfasis en la pedagogia, lo cual hace que enseñar sea una de mis tareas favoritas
        </p>
        <br/>
        <span>Si estás en la búsqueda de un desarrollador con un espíritu carismático y una pasión innegable por el mundo de la programación web, has encontrado el candidato adecuado. </span>
        <a href='yanez-cv.jpg' download={true} className='button'>Descargar CV</a>
        </div>
        
        </div>
       
        
      </article>



    </div>
  )
}

export default AboutMe