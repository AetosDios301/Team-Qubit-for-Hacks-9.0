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
                    <div className="card shadow-sm mb-4">
                        <UpcomingAppointments />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm mb-4">
                        <MedicalRecords />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm mb-4">
                        <HealthStats />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
