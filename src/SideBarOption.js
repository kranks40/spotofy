import React from 'react';
import './SideBarOption.css';

function SideBarOption({ option = 'test', Icon}) {
    return (
        <div className='sidebaroption'>
            {Icon && <Icon className='sidebaroption__icon' />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    );
}

export default SideBarOption;
