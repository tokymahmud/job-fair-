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
                    <img src="https://img.freepik.com/free-photo/businessman-black-suit-promoting-something_114579-15897.jpg?w=996&t=st=1681068924~exp=1681069524~hmac=39305af8077625d290135b51778790ec142f69e9d17b4dd0c106c96da76fa00a" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Title;