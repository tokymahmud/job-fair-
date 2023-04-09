import React from 'react';
import "./Home.css"
import Title from '../Title/Title';
import JobCatagory from '../JobCatagory/JobCatagory';

const Home = () => {
    return (
        <div>
           <Title></Title>
           
           <JobCatagory></JobCatagory>

        </div>
    );
};

export default Home;