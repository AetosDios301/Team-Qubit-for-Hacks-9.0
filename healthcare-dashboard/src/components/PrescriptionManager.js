import React from 'react';

const prescriptions = [
    { id: 1, name: 'Lisinopril', dosage: '10mg', refills: 2 },
];

const PrescriptionManager = () => {
    return (
        <div className="prescription-manager card">
            <div className="card-body">
                <h5 className="card-title">Current Prescriptions</h5>
                <ul className="list-group">
                    {prescriptions.map(prescription => (
                        <li className="list-group-item" key={prescription.id}>
                            {prescription.name} - {prescription.dosage} | Refills: {prescription.refills}
                        </li>
                    ))}
                </ul>
                <button className="btn btn-secondary mt-3">Request Refill</button>
            </div>
        </div>
    );
};

export default PrescriptionManager;
