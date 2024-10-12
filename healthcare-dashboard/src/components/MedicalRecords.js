import React from 'react';

const MedicalRecords = () => {
    return (
        <div className="medical-records card">
            <div className="card-body">
                <h5 className="card-title">Medical Records</h5>
                <p>No records found. Upload your documents.</p>
                <input type="file" className="form-control" />
                <button className="btn btn-secondary mt-2">Upload</button>
            </div>
        </div>
    );
};

export default MedicalRecords;
