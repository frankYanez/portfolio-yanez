import './App.css'
import Card from './Components/Card/Card'
import { CardInfo } from './Components/CardInfo/CardInfo'
import Header from './Components/Header/Header'
import projects, { languages } from '../src/Utils/Projects'
import Button from './Components/Button/Button'
import AboutMe from './Components/Sections/AboutMe'
import Academy from './Components/Sections/Academy'
import HardSkills from './Components/Sections/HardSkills'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Sections/Projects'
import SoftSkills from './Components/Sections/SoftSkills'
import Contact from './Components/Sections/Contact'
import Form from './Components/Form/Form'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from 'react'
import ButtonUp from './Components/ButtonUp/ButtonUp'
import {TbSquareRoundedChevronUpFilled}  from 'react-icons/tb'
// ..
AOS.init();


function App() {

    const [scroll, setScroll] = useState(0)
    const [visible, setVisble] = useState(false)

    const handleScroll = () => {
        const scroll = window.scrollY;

        setScroll(scroll);
    };

    useEffect(() => {

        if (scroll > 500) {
            setVisble(true)
        } else {
            setVisble(false)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scroll])

    const scrollTop = () => {
        window.scrollTo({
            top: 0
        })
    }

    return (
        <div className="App">
            <video className='miVideo' src='/assets/pexels1.mp4' autoPlay playbackrate="0.5" loop muted />
            <Header />
            <AboutMe />
            <Academy />
            <HardSkills />
            <SoftSkills />
            <Projects />
            <Contact />
            {

                visible && <button id='button-up'  data-aos="fade-up"
                data-aos-duration="2000" className='button' onClick={scrollTop}><TbSquareRoundedChevronUpFilled/></button>
            }


        </div>
    )
}

export default App
