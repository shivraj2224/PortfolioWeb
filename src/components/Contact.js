import React from 'react';
import './Contact.css';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='contact__main'>
                <h2 className='title'>Contact me</h2>
                <div className='contact__content'>
                    <div className='contact__contentLeft'>
                        <div className='text'>
                            Get in Touch
                        </div>
                        <p>
                            You can send me email on my email id. Also you can send me message through the given form. You can connect with me on LinkedIn or dm me on Instagram or Facebook.
                        </p>
                        <div className='contact_ids'>
                            <a href='https://www.linkedin.com/in/shivraj-hulwan-89b882172/'>
                                <LinkedInIcon/>
                            </a>
                            <a href='https://www.facebook.com/shivraj.hulwan.1'><FacebookIcon/></a>
                            <a href='https://www.instagram.com/shivraj2224/'><InstagramIcon/></a>
                        </div>
                        <div className='icons'>
                            <div className='row'>
                                <PersonIcon />
                                <div className='info'>
                                    <div className='head'>Name</div>
                                    <div className='subtitle'>Shivraj Shankar Hulwan</div>
                                </div>
                            </div>
                            <div className='row'>
                                <LocationOnIcon />
                                <div className='info'>
                                    <div className='head'>Address</div>
                                    <div className='subtitle'>Karad, Dist-Satara, State-Maharashtra, India</div>
                                </div>
                            </div>
                            <div className='row'>
                                <EmailIcon />
                                <div className='info'>
                                    <div className='head'>Email</div>
                                    <div className='subtitle'>shivrajhulwan7@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact__contentRight'>
                        <div className='text'>Message me</div>
                        <form action='#'>
                            <div className='fields'>
                                <div className='field name'>
                                    <input type='text' placeholder='Name' required />
                                </div>
                                <div className='field email'>
                                    <input type='email' placeholder='Email' required/>
                                </div>
                            </div>
                            <div className='field'>
                                <input type='text' placeholder='Subject' required/>
                            </div>
                            <div className='field textArea'>
                                <textarea cols='30' rows='10' placeholder='Describtion..' required></textarea>
                            </div>
                            <div className='button'>
                                <button type='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
