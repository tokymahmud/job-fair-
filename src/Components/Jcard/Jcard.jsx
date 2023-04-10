import React from 'react';
import "./Jcard.css"

const Jcard = ({jc}) => {
    const {image_url,title,number}=jc;
    return (
        <div className='jcardContainer'>  
            
             <div className='jcard'>
                <img src={image_url} alt="" />
                <h3>{title}</h3>
                <h5>{number}+ jobs available</h5>

            </div>
            
        
        </div>
        
    );
};

export default Jcard;