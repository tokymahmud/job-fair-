import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


const Statistics = () => {
    return (
        <div>
            


            <PieChart 
  data={[
    { title: 'Assignment One', value: 59,color: '#E38627' },
    { title: 'Assignment Two', value: 57, color: '#C13C37' },
    { title: 'Assignment Three', value: 57, color: '#6A2135' },
    { title: 'Assignment Four', value: 59, color: '#00B2FF' },
    { title: 'Assignment Five', value: 44, color: '#3AFF00' },
    { title: 'Assignment Six', value: 43, color: '#2005FD' },
    { title: 'Assignment Seven', value: 57, color: '#FF00E8' },
    { title: 'Assignment Eight', value: 56, color: '#B0001D' },
 
  ]}
/>;
        </div>
    );
};

export default Statistics;