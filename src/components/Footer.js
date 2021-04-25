import React from 'react';
import './Footer.css';
import CopyrightIcon from '@material-ui/icons/Copyright';

function footer() {
    return (
        <div className='footer'>
            <span>Created By <a href='#'>Shivraj Hulwan </a>| <CopyrightIcon />
                <span> 2020 All rights reserved</span>
            </span>

        </div>
    )
}

export default footer
