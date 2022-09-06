export const inputNameValidate = (value) => {
  const CODITIONS = !value || value.length < 3;
  console.log(value, CODITIONS);
  if (!CODITIONS) {
    return {
      bool: false,
      alert: 'O nome foi validado',
    };
  } else {
    return {
      bool: true,
      alert: 'Dever ter mais de 2 letras',
    };
  }
};
