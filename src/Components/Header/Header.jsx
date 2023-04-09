import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav>
            
            <h2>JobFair</h2>
            <div>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/ajobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>

            </div>
            <button className='btn-start'>Start Applying</button>

            
        
        
            
            
        </nav>
    );
};

export default Header;