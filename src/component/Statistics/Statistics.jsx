import React from 'react';
import './Statistics.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const AssiementChat = [
        {
          name: 'Assienment-1',
          mark: 50,
        },
        {
          name: 'Assienment-2',
          mark: 60,
        },
        {
          name: 'Assienment-3',
          mark: 55,
        },
        {
          name: 'Assienment-4',
          mark: 45,
        },
        {
          name: 'Assienment-5',
          mark: 45,
        },
        {
          name: 'Assienment-6',
          mark: 55,
        },
        {
           name: 'As-7',
           mark: 60,
        },
        {
           name: 'Assienment-8',
           mark: 60,
        },
      ];
    return (
      <div>
        <div className='news'> 
                <h1>Assienment Total Mark </h1>
            </div>
        <div className='mark-chat'>
            <h3 className='chat-title'>Assignment Analytics:</h3>
            <LineChart
              width={1100}
              height={400}
              data={AssiementChat}
              className='back-color'
            >
              <Line dataKey="mark" stroke='#8884d8'></Line>
              <XAxis dataKey="name" stroke='#8884d8'></XAxis>
              <YAxis></YAxis>
              <Tooltip/>
            </LineChart>
            
        </div>
      </div>
    );
};

export default Statistics;