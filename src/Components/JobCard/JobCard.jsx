import React from 'react';
import "./JobCard.css"
import { Link } from 'react-router-dom';

const JobCard = ({jcard}) => {
    const {company_logo_url,job_title,company_name,job_area,working_category,location,expected_salary,id}=jcard;

    return (
        <div className='jobcard-container'>
            <div className="card-group">
            <div className="card">
            <img src={company_logo_url} alt="" />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <div className='d-flex '>
           <button type="button" class="btn btn-info">{job_area}</button>
           <button type="button" class="btn btn-info">{working_category}</button>

            </div>
            <div className='d-flex '>
            <h2>{location}</h2>
            <h2>{expected_salary}</h2>
            </div>
            <button type="button" class="btn btn-info"> <Link to={`/job/${id}`}>View Details</Link></button>
            </div>
  

        </div>
        </div>
    );
};

export default JobCard;