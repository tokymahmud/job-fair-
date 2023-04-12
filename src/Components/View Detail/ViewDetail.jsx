import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./ViewDetail.css"

const ViewDetail = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const [job, setJob]=useState({});
    useEffect(()=>{
        const jobData =details.find(details=>details.id==id);
        setJob(jobData);
    },[])
    
    
    return (
        <div className='d-flex justify-content-evenly'>
            <div>
                <p><span className='fw-bold'>Job Description:</span>{job.job_description} </p>
                <p><span className='fw-bold'>Job Responsibility:</span>{job.responsibility} </p>
                <p className='fw-bold'>Educational Requirements: </p><br></br>
                <p>{job.educational_requirement}</p>
                <p className='fw-bold'>Experiences:</p><br></br>
                <p>{job.experience}</p>


            </div>
            <div className='sidepart'>
            <div className="card">
                <h4 className='fw-bold'>Job Details</h4>
                <hr></hr>
                <p><span className='fw-bold'>Salary:</span>{job.expected_salary}per month</p>
                <p><span className='fw-bold'>Job Title :</span>{job.job_title}per month</p>
                <h4 className='fw-bold'>Contact Information</h4>
                <hr></hr>
                <p><span className='fw-bold'>Phone : </span>{job.phone}</p>
                <p><span className='fw-bold'>Email </span>{job.email}:</p>
                <p><span className='fw-bold'>Address:</span>{job.location}</p>
                


            </div>
            <button type="button" className="btn btn-primary btn-sm align-item-center">Apply Now</button>
            </div>
        </div>
    );
};

export default ViewDetail;