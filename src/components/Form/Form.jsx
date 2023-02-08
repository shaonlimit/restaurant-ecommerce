import React from 'react';

const Form = ({
  formInputData,
  buttonText,
  inputValues,
  setInputValues,
  saveInformation,
}) => {
  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveInformation(inputValues);
  };

  return (
    <form action='' onSubmit={handleSubmit}>
      <div className='input flex flex-col'>
        {formInputData.map((input, index) => (
          <input
            className='bg-slate-100 mb-4 p-2 rounded focus:outline-none'
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            required
            onChange={handleChange}
          />
        ))}
      </div>
      {/* button */}
      <div className=' w-full'>
        <button
          type='submit'
          className=' inline-block p-2 px-12 bg-primary-color rounded w-full text-white font-medium'
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default Form;
