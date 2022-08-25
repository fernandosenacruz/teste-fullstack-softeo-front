import React from 'react';
import Card from '../components/Card';
import Calc from '../components/Calc';
import pacients from '../api/termIncome.json';

function Home() {
  return (
    <>
      <Calc/>
      {pacients.map((pacient) => (
        <Card key={pacient.id} pacient={pacient} />
      ))}
    </>
  );
}

export default Home;
