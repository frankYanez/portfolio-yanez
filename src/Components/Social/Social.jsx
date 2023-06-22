import React from 'react'
import './Social.styles.css'

const Social = () => {
  const sendEmail = ()=>{
    const email = 'frankyanez9413@gmail.com';
    const subject = '¡Tengamos un dialogo!'

    const mailTo = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    const gmail = `https://mail.google.com/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}}`

    const tab = window.open(gmail, '_blank')
    if (!tab) {
      window.location.href = mailTo
    }

    
  }

  const redirect = (arg) => {
    
    if(arg == "linkedin"){
      window.open('https://www.linkedin.com/in/frank-yanez-developer/', '_blank')
    }else{

      window.open('https://github.com/frankYanez', '_blank');
    }
  }
  return (
    <article className='d-flex j-content'>
        <img onClick={()=> redirect("linkedin")} className='logo-social' src="/assets/linkedin.png" alt="" />
        <img onClick={()=> redirect()} className='logo-social' src="/assets/github.png" alt="" />
        <img onClick={()=> sendEmail()} className='logo-social' src="/assets/gmail.png" alt="" />
    </article>
  )
}

export default Social