import React, { Component } from 'react'
import Slider from './Slider'
import About from './About'
import ServiceDisplay from './ServiceDisplay'
import ServiceTable from './ServiceTable'
import Promo from './Promo'
import ContactUs from './ContactUs'
import BottomFooter from './BottomFooter'
import NavBar from './NavBar'
import YoutubeVideo from './YoutubeVideo';
class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <section id="slider">
                    <Slider/>
                </section>
                <section id="about" style={{backgroundColor: '#343a40', color: 'azure'}}>
                    <About/>
                </section>
                <section className="bg-dark" id="media">
                    <div className="container">
                        <ServiceDisplay/>
                    </div>
                    <div className="container">
                        <ServiceTable/>
                    </div>
                    <section className="container">
                        <YoutubeVideo/>
                    </section>
                </section>
                <section id="promo">
                    <Promo/>
                </section>
              
                <section id="contact" className="bg-dark">
                    <ContactUs/>
                </section>
                <section id="footer">
                    <BottomFooter/>
                </section>

            </div>
        )
    }
}

export default Home
