import { useState } from 'react';
import {
  inputNameValidate,
  inputNumberInstallmentValidate,
  inputTotalCostDentalTreatmentValidate,
} from '../helpers/formCreatePatientValidate';

const useInputs = () => {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState('Os campos com * são obrigatórios');
  const [disabled, setDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(true);
  const [numberInstallment, setNumberInstallment] = useState('');
  const [totalCostDentalTreatment, setTotalCostDentalTreatment] = useState('');

  const handleChangeName = ({ target }) => {
    if (target.value !== '') {
      const { regex, bool, alert, length } = inputNameValidate(
        target.value[target.value.length - 1],
        target.value,
      );
      regex && setName(target.value);
      setAlert(alert);
      setDisabled(!regex || !length);
      setShowAlert(!bool);
    } else {
      setName('');
    }
  };

  const handleChangeNumberInstallment = ({ target }) => {
    setNumberInstallment(target.value);
    const { showAlert, alert, disabled } = inputNumberInstallmentValidate(
      target.value,
    );
    setAlert(alert);
    setDisabled(!disabled);
    setShowAlert(showAlert);
  };

  const handleChangeTotalCostDentalTreatment = ({ target }) => {
    setTotalCostDentalTreatment(target.value);
    const { showAlert, alert, disabled } =
      inputTotalCostDentalTreatmentValidate(target.value);
    setAlert(alert);
    setDisabled(!disabled);
    setShowAlert(!showAlert);
  };

  return {
    name,
    alert,
    disabled,
    showAlert,
    numberInstallment,
    totalCostDentalTreatment,
    handleChangeName,
    handleChangeNumberInstallment,
    handleChangeTotalCostDentalTreatment,
  };
};

export default useInputs;
