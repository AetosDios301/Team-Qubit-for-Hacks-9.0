import React from 'react';

const MedicalRecords = () => {
    const records = [
        { recordType: 'Blood Test', date: 'Sep 10, 2024', result: 'Normal' },
        { recordType: 'X-ray', date: 'Aug 22, 2024', result: 'No issues detected' }
    ];

    return (
        <div className="card-body">
            <h5 className="card-title">Medical Records</h5>
            <ul className="list-group">
                {records.map((record, index) => (
                    <li key={index} className="list-group-item">
                        {record.recordType} on {record.date}: {record.result}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MedicalRecords;
