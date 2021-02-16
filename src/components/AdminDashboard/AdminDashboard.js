import React, { useState, useEffect } from 'react';

import PendingIncident from './PendingIncident';

import './AdminDashboard.scss';

// Mock data to represent incoming twitter data from the database that will be reviewed by the admin
const dummyData = [
  {
    categories: [
      'explosive',
      'less-lethal',
      'projectile',
      'rubber-bullet',
      'shoot',
    ],
    city: 'San Jose',
    date: '2020-05-29T05:00:00.000Z',
    desc:
      'A protester filming receives water bottles from a car and begins to distribute them',
    empty_hand_hard: false,
    empty_hand_soft: false,
    incident_id: 'ca-sanjose-5',
    lat: 37.3353,
    less_lethal_methods: true,
    lethal_force: false,
    long: -121.889,
    src: ['https://www.youtube.com/watch?v=89mUHzu3480'],
    state: 'California',
    title: 'Man struck by rubber bullet and explosive device',
    uncategorized: false,
  },
  {
    categories: ['explosive', 'shoot'],
    city: 'Chicago',
    date: '2020-05-29T05:00:00.000Z',
    desc:
      'A protester filming receives water bottles from a car and begins to distribute them',
    empty_hand_hard: false,
    empty_hand_soft: false,
    incident_id: 'il-chicago-6',
    lat: 37.3353,
    less_lethal_methods: true,
    lethal_force: false,
    long: -121.889,
    src: ['https://www.youtube.com/watch?v=89mUHzu3480'],
    state: 'Illinois',
    title: 'Man struck by weapon',
    uncategorized: false,
  },
];

const AdminDashboard = () => {
  // setting up local state to keep track of selected/"checked" incidents
  const [selected, setSelected] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const selectAll = () => {
    setAllSelected(!allSelected);
    if (!allSelected) {
      setSelected(dummyData.map(data => data.incident_id));
    } else {
      setSelected([]);
    }
  };

  const changeSelected = incident => {
    if (selected.includes(incident.incident_id)) {
      const newSelected = selected.filter(id => {
        return id !== incident.incident_id;
      });
      setSelected(newSelected);
    } else {
      setSelected([...selected, incident.incident_id]);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Statistics</h3>

      <div className="statboxes">
        <div className="statbox">
          <p>{dummyData.length} unapproved incidents</p>
        </div>
        <div className="statbox">
          <p>stats</p>
        </div>
        <div className="statbox">
          <p>STATS!</p>
        </div>
      </div>

      <h3>Incidents</h3>
      <label htmlFor="select-all">
        <p className="approve-reject-select">Select All</p>
        <input
          className="approve-reject-select"
          type="checkbox"
          name="select-all"
          onChange={selectAll}
        />
        <button className="approve-reject-select">Approve</button>
        <button className="approve-reject-select">Reject</button>
      </label>
      <div className="incidents">
        {dummyData.map(incident => {
          return (
            <PendingIncident
              key={incident.incident_id}
              incident={incident}
              selected={selected}
              changeSelected={changeSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
