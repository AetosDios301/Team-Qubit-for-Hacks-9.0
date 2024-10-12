import React from 'react';

const notifications = [
    { id: 1, message: 'Your appointment with Dr. John Doe is tomorrow at 10:00 AM.' },
    { id: 2, message: 'Don’t forget to take your medication!' },
];

const Notifications = () => {
    return (
        <div className="notifications card">
            <div className="card-body">
                <h5 className="card-title">Notifications</h5>
                <ul className="list-group">
                    {notifications.map(notification => (
                        <li className="list-group-item" key={notification.id}>
                            {notification.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notifications;
