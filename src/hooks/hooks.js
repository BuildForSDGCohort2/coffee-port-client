import { useState } from 'react';

const useForm = (data) => {
  const [fieldValues, setFieldValues] = useState(data);
  const handleChange = (event) => {
    event.persist();
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFieldValues((Values) => ({
      ...Values,
      [event.target.name]: value,
    }));
  };

  return { handleChange, fieldValues };
};

export default useForm;
