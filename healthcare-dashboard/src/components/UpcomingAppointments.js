import React from 'react';

const UpcomingAppointments = () => {
    const appointments = [
        { doctor: 'Dr. Smith', date: 'Oct 14, 2024', time: '10:00 AM' },
        { doctor: 'Dr. Adams', date: 'Oct 20, 2024', time: '2:00 PM' }
    ];

    return (
        <div className="card-body">
            <h5 className="card-title">Upcoming Appointments</h5>
            <ul className="list-group">
                {appointments.map((appointment, index) => (
                    <li key={index} className="list-group-item">
                        {appointment.doctor} on {appointment.date} at {appointment.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UpcomingAppointments;
