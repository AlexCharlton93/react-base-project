import React from 'react';
import CheckboxGroup from '../../components/CheckboxGroup';

const Dashboard = () => {
  const teams = [
    {
      name: 'Team One',
      users: [
        {
          selected: true,
          userId: 'T1U1',
          userName: 'Team 1 - User One',
        },
        {
          selected: false,
          userId: 'T1U2',
          userName: 'Team 1 - User Two',
        },
      ]
    },
    {
      name: 'Team Two',
      users: [
        {
          selected: true,
          userId: 'T2U1',
          userName: 'Team 2 - User One',
        },
        {
          selected: false,
          userId: 'T2U2',
          userName: 'Team 2 - User Two',
        },
      ]
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <CheckboxGroup
          data={teams}
        />
      </div>
    </div>
  );
}

export default Dashboard;
