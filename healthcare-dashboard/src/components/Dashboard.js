import React from 'react';
import UpcomingAppointments from './UpcomingAppointments';
import MedicalRecords from './MedicalRecords';
import HealthStats from './HealthStats';

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">My Health Dashboard</h1>
            
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                        <UpcomingAppointments />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                        <MedicalRecords />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                        <HealthStats />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
