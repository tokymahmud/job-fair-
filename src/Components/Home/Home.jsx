import React, { useEffect, useState } from 'react';
import "./Home.css"
import Title from '../Title/Title';
import JobCatagory from '../JobCatagory/JobCatagory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJob/FeaturedJob';
import "./Home.css"


import Jcard from '../Jcard/Jcard';
import JobCard from '../JobCard/JobCard';



  

const Home = () => {
    const jcatagory = useLoaderData();
    const [categories, setCategories] = useState([])
useEffect(() => {
    const loadData = async () => {
        const res = await fetch('/job.json');
        const value = await res.json();
        setCategories(value)
    };
    loadData();
}, []);

    return (
     
        <div className='container'>
           <Title></Title>
           <JobCatagory></JobCatagory>
           {
             jcatagory.map(jc => <Jcard className='jcardcontainer'
                key={jc.id}
                jc={jc}
                ></Jcard>)

           }
           <FeaturedJobs></FeaturedJobs>
           {
             categories.map(jcard => <JobCard className='jobcard-container'
                key={jcard.id}
                jcard={jcard}
                ></JobCard>)

           }
          
          

        </div>
    );
};

export default Home ;