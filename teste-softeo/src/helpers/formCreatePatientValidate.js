export const inputNameValidate = (value) => {
  const REGEX = /[a-z]/i;
  const CODITION_REGEX = REGEX.test(value);
  const CODITION_LENGTH = value.length < 3;
  console.log(value, CODITION_REGEX, CODITION_LENGTH);
  if (CODITION_REGEX && CODITION_LENGTH) {
    return {
      regex: true,
      length: true,
      alert: 'Ok',
    };
  } else if (CODITION_REGEX && !CODITION_LENGTH) {
    return {
      regex: true,
      length: false,
      alert: 'O nome deve ter mais de duas letras',
    };
  } else if (!CODITION_REGEX && CODITION_LENGTH) {
    return {
      regex: false,
      length: true,
      alert: 'O nome não pode conter números',
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
