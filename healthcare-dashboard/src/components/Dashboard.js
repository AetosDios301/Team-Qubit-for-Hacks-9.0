import React from 'react';
import ProfileOverview from './ProfileOverview';
import AppointmentManager from './AppointmentManager';
import HealthStats from './HealthStats';
import MedicalRecords from './MedicalRecords';
import PrescriptionManager from './PrescriptionManager';
import Notifications from './Notifications';
import FindCare from './FindCare';
import Support from './Support';
import './styles.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Welcome to HealthBridge</h1>
                <ProfileOverview />
            </header>
            
            <div className="dashboard-content">
                <div className="row">
                    <div className="col-md-4">
                        <AppointmentManager />
                        <Notifications />
                    </div>
                    <div className="col-md-8">
                        <HealthStats />
                        <MedicalRecords />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <PrescriptionManager />
                    </div>
                    <div className="col-md-6">
                        <FindCare />
                    </div>
                </div>

                <Support />
            </div>
        </div>
    );
};

export default Dashboard;
