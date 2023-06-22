import React from 'react'
import './Sections-styles.css'
import Form from '../Form/Form'
const Contact = () => {
	return (
		<section id='contact' className='section-separation'>

			<h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay='500' className='title-section'>Vamos a conocernos</h2>

			<div className='d-flex contact-section container'>
				<div className='d-flex contain-form'>
					<Form />
					<img className='header-content__photo contact-image' src="/assets/contact-image.png" alt="" />
				</div>


				<div className='contain-phrase'>

					<p className='phrase'> <span className='comillas'>"</span> El exito es la suma de pequeños esfuerzos repetidos dia tras dia <span className='comillas'>"</span></p>
					<img className='img-phrase' src="/assets/phrase-img.png" alt="" />
				</div>

			</div>

		</section>
	)
}

export default Contact

