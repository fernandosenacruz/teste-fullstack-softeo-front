const incomeCalc = (array) => {
  return array.reduce((acc, curr) => {
    return acc + curr.installmentAmount;
  }, 0);
};

export default incomeCalc;
