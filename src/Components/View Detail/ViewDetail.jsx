import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./ViewDetail.css"
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const ViewDetail = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const [job, setJob]=useState({});
    useEffect(()=>{
        const jobData =details.find(details=>details.id==id);
        setJob(jobData);
    },[])
    useEffect(()=>{
        const storedid=getShoppingCart();
        for(const id in storedid){
            const savedid = details.find(details=>details.id==id);
            const quantity =storedid[id];
            savedid.quantity =quantity;
        }
    },[])
    
    return (
        <div>
            <h2 className='text-decoration-underline text-center p-5'>Job Details</h2>
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
                <p><span className='fw-bold'>Job Title :</span>{job.job_title}</p>
                <h4 className='fw-bold'>Contact Information</h4>
                <hr></hr>
                <p><span className='fw-bold'>Phone : </span>{job.phone}</p>
                <p><span className='fw-bold'>Email </span>{job.email}:</p>
                <p><span className='fw-bold'>Address:</span>{job.location}</p>
                


            </div>
            <button type="button" className="btn btn-primary btn-sm align-item-center" onClick={()=>addToDb(job.id)}>Apply Now</button>
            </div>
        </div>

        </div>
       
    );
};

export default ViewDetail;