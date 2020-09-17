import { useState } from 'react';

const useForm = (data) => {
  const [fieldValues, setFieldValues] = useState(data);
  const handleChange = (event) => {
    event.persist();
    setFieldValues((Values) => ({
      ...Values,
      [event.target.name]: event.target.value,
    }));
  };

  return { handleChange, fieldValues };
};

export default useForm;
