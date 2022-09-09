export const inputNameValidate = (value, name) => {
  const REGEX = /[a-z-á-ź\s]/i;
  const CODITION_REGEX = REGEX.test(value);
  const CODITION_LENGTH = name.length > 3;
  
  if (CODITION_REGEX && CODITION_LENGTH) {
    return {
      alert: 'Ok',
      bool: true,
      length: true,
      regex: true,
    };
  } else if (CODITION_REGEX && !CODITION_LENGTH) {
    return {
      alert: 'O nome deve ter mais de duas letras',
      bool: false,
      length: false,
      regex: true,
    };
  } else if (!CODITION_REGEX) {
    return {
      alert: 'O nome não pode conter números',
      bool: false,
      length: true,
      regex: false,
    };
  }
};

export const inputTotalCostDentalTreatmentValidate = (value) => {
  const CODITIONS = !value || value < 100;

  if (!CODITIONS) {
    return {
      alert: 'Ok',
      showAlert: true,
      disabled: true,
    };
  } else {
    return {
      alert: 'Valor mínimo para tratamento R$ 100',
      showAlert: false,
      disabled: false,
    };
  }
};

export const inputNumberInstallmentValidate = (value) => {
  const CODITIONS = !value || value < 2;

  if (!CODITIONS) {
    return {
      alert: 'Ok',
      showAlert: false,
      disabled: true,
    };
  } else {
    return {
      alert: 'Valor mínimo de parcelas: 2',
      disabled: false,
      showAlert: true,
    };
  }
};
