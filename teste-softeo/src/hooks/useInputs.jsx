import { useState } from 'react';
import {
  inputNameValidate,
  inputNumberInstallmentValidate,
  inputTotalCostDentalTreatmentValidate,
} from '../helpers/formCreatePatientValidate';

const useInputs = () => {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState('Ok');
  const [disabled, setDisabled] = useState(true);
  const [numberInstallment, setNumberInstallment] = useState('');
  const [totalCostDentalTreatment, setTotalCostDentalTreatment] = useState('');

  const handleChangeName = ({ target }) => {
    if (target.value !== '') {
      const { regex, length, alert } = inputNameValidate(
        target.value[target.value.length - 1],
        target.value,
      );
      regex && setName(target.value);
      regex && setDisabled(regex);
      length && setDisabled(length);
      setAlert(alert);
    } else {
      setName('');
    }
  };

  const handleChangeNumberInstallment = ({ target }) => {
    setNumberInstallment(target.value);
    const { bool, alert } = inputNumberInstallmentValidate(target.value);
    setDisabled(bool);
    setAlert(alert);
  };

  const handleChangeTotalCostDentalTreatment = ({ target }) => {
    setTotalCostDentalTreatment(target.value);
    const { bool, alert } = inputTotalCostDentalTreatmentValidate(target.value);
    setDisabled(bool);
    setAlert(alert);
  };

  return [
    name,
    alert,
    disabled,
    numberInstallment,
    totalCostDentalTreatment,
    handleChangeName,
    handleChangeNumberInstallment,
    handleChangeTotalCostDentalTreatment,
  ];
};

export default useInputs();
