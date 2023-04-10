import React from 'react';
import "./Home.css"
import Title from '../Title/Title';
import JobCatagory from '../JobCatagory/JobCatagory';
import { useLoaderData } from 'react-router-dom';
import Jcard from '../Jcard/Jcard';

const Home = () => {
    const jcatagory = useLoaderData();
    return (
        <div>
           <Title></Title>
           <JobCatagory></JobCatagory>
           {
             jcatagory.map(jc => <Jcard
                key={jc.id}
                jc={jc}
                ></Jcard>)

           }
          
          

        </div>
    );
};

export default Home;