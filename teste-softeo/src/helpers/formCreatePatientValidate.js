export const inputNameValidate = (value) => {
  const CODITIONS = !value || value.length < 3;
  console.log(value, CODITIONS);
  if (!CODITIONS) {
    return {
      bool: false,
      alert: 'Ok',
    };
  } else {
    return {
      bool: true,
      alert: 'O nome deve ter mais de duas letras',
    };
  }
};

export const inputTotalCostDentalTreatmentValidate = (value) => {
  const CODITIONS = !value || value < 100;
  if (!CODITIONS) {
    return {
      bool: false,
      alert: 'Ok',
    };
  } else {
    return {
      bool: true,
      alert: 'Valor mínimo para tratamento R$ 100',
    };
  }
};

export const inputNumberInstallmentValidate = (value) => {
  const CODITIONS = !value || value < 2;
  if (!CODITIONS) {
    return {
      bool: false,
      alert: 'Ok',
    };
  } else {
    return {
      bool: true,
      alert: 'Valor mínimo de parcelas: 2',
    };
  }
};
