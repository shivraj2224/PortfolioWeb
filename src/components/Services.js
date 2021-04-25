import React from 'react';
import Card from './Card';
import './Services.css';
import BrushIcon from '@material-ui/icons/Brush';
import CodeIcon from '@material-ui/icons/Code';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Services() {
    return (
        <div class='services' id='services'>
            <div className='services__main'>
                <h2 class='title'>My services</h2>
                <div className='service__content'>
                    <Card icon='BrushIcon' title='Web Development'
                        subtitle='I am a FullStack Developer (MERN). I have developed various frontend websites using html, css and javascript. Also I can do the same using ReactJs. In backend I have worked with Node Js , Express Js and MongoDB.'
                    />
                    <Card icon='TrendingUpIcon' title='Data Analysis' 
                        subtitle='I have done small data analysis projects using Python. Also I have knowledge of Machine Learning and Deep Learning. I have good understanding of different libraries like numpy, pandas, matplotlib, sklearn, etc.'
                    />
                    <Card icon='CodeIcon' title='App Development'
                        subtitle='I have developed various apps using React Native, which is a cross platform to develop apps for android and ios. I have created repelica of different companies app like Netflix '
                    />
                </div>
            </div>

        </div>
    )
}

export default Services
