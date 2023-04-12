import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ajobs = () => {
    const ajob= useLoaderData();
    const value = localStorage.getItem('key');
     

    return (
        <div>
            <h2 className='text-decoration-underline text-center p-5'>Applied Jobs</h2>
            <div>
            {/* {value.map(ajob => (
            <tr key={job.id}>
              <td>{job.job_title}</td>
              <td>{job.working_category}</td>
            </tr> */}
          ))}
            </div>
        </div>
    );
};

export default ajobs;