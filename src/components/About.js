import React from 'react';
import './About.css';
import profile from '../assets/profile.JPG';

function About() {
    return (
        <div className='about' id='about'>
            <div className='about__main'>
                <h2>About Me</h2>
                <div className='about__content'>
                    <div className='about__contentLeft'>
                        <img src={profile} alt='IMG' />
                    </div>
                    <div className='about__contentRight'>
                        <div className='about__text'>
                            I'm Shivraj Hulwan and I'm a <span>Programmer</span>
                        </div>
                        <p> 
                            I am currently pursuing my B.Tech in Electronics and Telecommunication in Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded (2018-2022). Other then this I have done internship at IIT Kharagpur in my first year. Also in my first year I was a volunter in Event Affairs Commitee in Pragyaa which is a technical event of my college. In second year I did internship at IIT Delhi. There I worked on web project called ReportSite. In third year I got a change to work in a startup called Dailykit. There I worked as a FullStack Developer. 
                            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of  */}
                        </p>
                        {/* <a href='#'>Download CV</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
