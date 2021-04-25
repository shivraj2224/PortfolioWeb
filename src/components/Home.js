import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='home' id='home'>
            <div className='home__main'>
                <div className='home__content'>
                    <div className='text-1'>Hello, My name is</div>
                    <div className='text-2'>Shivraj Hulwan</div>
                    <div className='text-3'>And I'm a <span>Programmer</span></div>
                </div>
            </div>
        </div>
    )
}

export default Home
