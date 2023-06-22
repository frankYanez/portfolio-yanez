import React from 'react'
import Soft from '../Soft/Soft'
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const SoftSkills = () => {
  const softs = [
    {
      icon: '/assets/soft-icon1.png',
      title: 'Comunicacion',
      descripcion: 'Mi compromiso con la excelencia, la comunicación clara y la colaboración efectiva me permite establecer relaciones sólidas con mis clientes y lograr resultados sobresalientes en cada proyecto.'
    },
    {
      icon: '/assets/soft-icon2.png',
      title: 'Formacion',
      descripcion: 'Con una sólida formación y experiencia en el area front-end, ofrezco un enfoque estratégico y soluciones personalizadas que impulsan el éxito de los proyectos y superan las expectativas.'
    },
    {
      icon: '/assets/soft-icon3.png',
      title: 'Compromiso',
      descripcion: 'Mi pasión por la programacion se refleja en cada proyecto que emprendo. Trabajo incansablemente para lograr resultados excepcionales y cumplir con los objetivos establecidos.'
    },
    {
      icon: '/assets/soft-icon4.png',
      title: 'Responsabilidad',
      descripcion: 'Mi enfoque centrado en el cliente y mi capacidad para comprender y abordar las necesidades específicas me permiten entregar soluciones efectivas y sobrepasar las expectativas del cliente.'
    },
    {
      icon: '/assets/soft-icon5.png',
      title: 'Resolucion',
      descripcion: 'Con una habilidad innata para la resolución de problemas y un enfoque orientado a resultados, estoy comprometido a proporcionar un servicio de calidad y a entregar proyectos exitosos en tiempo y forma.'
    },
    {
      icon: '/assets/soft-icon6.png',
      title: 'Autodisciplina',
      descripcion: 'Mi trayectoria academica respaldada por logros demostrables en el area IT me posiciona como una persona confiable y capaz de enfrentar los desafíos más exigentes.'
    },
  ]
  return (
    <div className='container'>
        <h2 data-aos="fade-up" className='title-section'>Razones para elegirme</h2>
        <section className='soft-skills d-flex'>
        
            
        <article className='soft-container d-flex'>
           
             <Soft data-aos="fade-right" item={softs[0]}/>
             <Soft data-aos="fade-left" item={softs[1]}/>
             <Soft data-aos="fade-right" item={softs[2]}/>
             </article>
             <img className='soft-img' src="/assets/soft-image.png" alt="" />
             <article className='soft-container d-flex'>
           
             <Soft data-aos="fade-left" item={softs[3]}/>
             <Soft data-aos="fade-right" item={softs[4]}/>
             <Soft data-aos="fade-left" item={softs[5]}/>
             </article>
          
           

         
          
         
          
        </section>
    </div>
  )
}

export default SoftSkills