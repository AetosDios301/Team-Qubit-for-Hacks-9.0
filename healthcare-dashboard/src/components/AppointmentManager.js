import React from 'react';

const appointments = [
    { id: 1, doctor: 'Dr. John Doe', date: '2024-10-15', time: '10:00 AM' },
    { id: 2, doctor: 'Dr. Jane Smith', date: '2024-10-20', time: '2:00 PM' },
];

const AppointmentManager = () => {
    return (
        <div className="appointment-manager card">
            <div className="card-body">
                <h5 className="card-title">Upcoming Appointments</h5>
                <ul className="list-group">
                    {appointments.map(appointment => (
                        <li className="list-group-item" key={appointment.id}>
                            {appointment.doctor} - {appointment.date} at {appointment.time}
                        </li>
                    ))}
                </ul>
                <button className="btn btn-primary mt-3">Book New Appointment</button>
            </div>
        </div>
    );
};

export default AppointmentManager;
