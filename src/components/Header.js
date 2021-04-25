import React, { useState } from 'react';
import './Header.css';
import CloseIcon from '@material-ui/icons/Close';
import ReorderIcon from '@material-ui/icons/Reorder';

function Header() {

    const [active, setActive] = useState(false);
    const [navActive, setNavActive] = useState(false);

    const toggleClass = () => {
        setActive(prevState => !prevState);
        console.log(active);
    }

    const navclass = () => {
        if(window.scrollY >= 10){
            setNavActive(true);

        }else{
            setNavActive(false);
        }
    }

    window.addEventListener('scroll',navclass);

    return (
        <div className={ navActive ? 'header headerActive' :'header'}>
            <div className='header__main'>
                <div className='header__left'>
                    <a>Portfo<span className={navActive ? 'logoActive': 'logo' }>lio</span></a>
                </div>
                <div className={active ? 'header__right header__rightActive' : 'header__right'}>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#services'>Services</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        {/* <li><a href='#teams'>Teams</a></li> */}
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='menu-btn' onClick={toggleClass} >
                    {
                        active ? <CloseIcon /> : <ReorderIcon  fontSize='large' /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
