import { useState, useCallback } from "react";

export function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidation, setIsValidation] = useState(false);
   

  const handleOnchange = (event) => {      
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    setErrors({ ...errors, [name]: target.validMessage });
    setValues({ ...values, [name]: value });
    setIsValidation(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValidation = false) => {
     
      setIsValidation(newIsValidation);
      setErrors(newErrors);
      setValues(newValues);
    },
    [setValues, setErrors, setIsValidation]
  );

  return { values, errors, handleOnchange, resetForm, isValidation };
}