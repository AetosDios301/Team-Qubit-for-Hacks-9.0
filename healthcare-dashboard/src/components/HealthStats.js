import React from 'react';
import { Line } from 'react-chartjs-2';

const HealthStats = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Blood Pressure',
                data: [120, 115, 130, 125, 110, 115],
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div className="health-stats card">
            <div className="card-body">
                <h5 className="card-title">Health Stats</h5>
                <Line data={data} />
            </div>
        </div>
    );
};

export default HealthStats;
