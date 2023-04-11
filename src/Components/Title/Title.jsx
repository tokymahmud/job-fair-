import React from 'react';
import "./Title.css"

const Title = () => {
    return (
        <div>
             <div className='title'>
                <div>
                    <h2>One Step <br></br> Closer To Your <br></br> <span className='span-title'>Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the <br></br> information you need. Its your future. Come find it. <br></br>Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div className='title-img'>
                    <img src="https://img.freepik.com/free-photo/home-network_1098-13328.jpg?w=996&t=st=1681119774~exp=1681120374~hmac=924ff475f1ce0c8250304ad5036b395be9f4c378d3af1bb1b553beff63495192" />
                </div>
            </div>
        </div>
    );
};

export default Title;