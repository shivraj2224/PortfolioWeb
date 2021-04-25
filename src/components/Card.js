import React from 'react';
import BrushIcon from '@material-ui/icons/Brush';
import CodeIcon from '@material-ui/icons/Code';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const IconFunc = ({icon}) => {

    if(icon == 'BrushIcon'){
        return (<BrushIcon fontSize='large' color='crimson' />)
    }else if(icon == 'CodeIcon'){
        return (<CodeIcon fontSize='large' />)
    }else if(icon == 'TrendingUpIcon'){
        return (<TrendingUpIcon fontSize='large' />)
    }
}

function Card({ icon ,title, subtitle }) {

    return (
        <div className='card'> 
            <div className='box'>
                    <IconFunc icon={icon} />
                <div className='text'>
                    {title}
                </div>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default Card;
 