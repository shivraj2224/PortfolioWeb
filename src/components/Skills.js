import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <div className='skills' id='skills'>
            <div className='skills__main'>
                <h2 class='title'>My Skills</h2>
                <div className='skills__content'>
                    <div className='skills__contentLeft'>
                        <div className='text'>
                            My creative Skills & experiences
                        </div>
                        <p>
                            In frontend I know HTML, CSS, JavaScript and ReactJS. In backend NodeJs, Express JS and MongoDB. I have also worked with Firbase. I can also do Data Analysis in Python. Also I am good at Data Structures and Algorithms. I use C++ for doing competetive Programming. I know English, Hindi and Marathi language. I am also good at public speaking and know how to work with team.
                        </p>
                        {/* <a href='#'>Read more</a> */}
                    </div>
                    <div className='skills__contentRight'>
                        <div className='bars'>
                            <div className='info'>
                                <span>ReactJS</span>
                                <span>70%</span>
                            </div>
                            <div className='line react'></div>
                        </div>
                        <div className='bars'>
                            <div className='info'>
                                <span>CSS</span>
                                <span>75%</span>
                            </div>
                            <div className='line css'></div>
                        </div>
                        <div className='bars'>
                            <div className='info'>
                                <span>JavaScript</span>
                                <span>60%</span>
                            </div>
                            <div className='line javascript'></div>
                        </div>
                        <div className='bars'>
                            <div className='info'>
                                <span>Python</span>
                                <span>55%</span>
                            </div>
                            <div className='line python'></div>
                        </div>
                        <div className='bars'>
                            <div className='info'>
                                <span>C++</span>
                                <span>65%</span>
                            </div>
                            <div className='line c'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
