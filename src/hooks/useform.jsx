import { useState } from 'react';

function useForm(defaultValue = {}) {
  const [formData, setFormData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(fieldName, value) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value
    }));
  }

  function handleChangeFromEvent(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  function reset(data) {
    setFormData(data);
  }

  return {
    formData,
    reset,
    handleChange,
    handleChangeFromEvent,
    loading,
    setLoading,
    errors,
    setErrors
  };
}

export default useForm;
