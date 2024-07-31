import React from 'react';

const Citizen = ({ index, citizen, changeStatus }) => {
  return (
    <li>
      <div className="citizen-details">
        <span className="number">{index + 1}.</span>
        <div className="info">
          <span className="name">{citizen.name}</span>
          <span className="age">Age: {citizen.age}</span>
          <span className="address">Address: {citizen.address}</span>
          <span className={`status ${citizen.status.toLowerCase()}`}>
            Status: {citizen.status}
          </span>
        </div>
      </div>
      <button onClick={changeStatus}>Toggle Status</button>
    </li>
  );
};

export default Citizen;
