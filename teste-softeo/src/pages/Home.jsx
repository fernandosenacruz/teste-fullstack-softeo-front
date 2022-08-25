import React from 'react';
import Card from '../components/Card';
import pacients from '../api/termIncome.json';

function Home() {
  return (
    <>
      {pacients.map((pacient) => (
        <Card key={pacient.id} pacient={pacient} />
      ))}
    </>
  );
}

export default Home;
