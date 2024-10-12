import React from 'react';

const FindCare = () => {
    return (
        <div className="find-care card">
            <div className="card-body">
                <h5 className="card-title">Find Care</h5>
                <p>Quick access to search for doctors or facilities.</p>
                <input type="text" className="form-control" placeholder="Search for doctors..." />
                <button className="btn btn-primary mt-2">Search</button>
            </div>
        </div>
    );
};

export default FindCare;
