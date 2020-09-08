import { useState } from 'react';

const useForm = (data) => {
  const [fieldValues, setFieldValues] = useState(data);
  const handleChange = (event) => {
    event.persist();
    console.log(event);
    setFieldValues((Values) => ({
      ...Values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return { handleChange, fieldValues, handleSubmit };
};

export default useForm;
