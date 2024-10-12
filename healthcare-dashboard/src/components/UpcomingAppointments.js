import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const UpcomingAppointments = () => {
    const appointments = [
        { doctor: 'Dr. Smith', date: 'Oct 14, 2024', time: '10:00 AM' },
        { doctor: 'Dr. Adams', date: 'Oct 20, 2024', time: '2:00 PM' }
    ];

    return (
        <div className="card">
            <h3>Upcoming Appointments <FontAwesomeIcon icon={faCalendarAlt} /></h3>
            <ul>
                {appointments.map((appointment, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={faCalendarAlt} /> {appointment.doctor} on {appointment.date} at {appointment.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingAppointments;
