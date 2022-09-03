const searchByName = (array, name) => {
  return array.filter((patient) =>
    patient.name.toLowerCase().includes(name.toLowerCase()),
  );
};

export default searchByName;
