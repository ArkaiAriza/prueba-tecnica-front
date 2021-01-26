import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';

const fields = [
  {
    label: 'name',
  },
  {
    label: 'description',
  },
];

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category);
    axios.post('http://localhost:4000/category', {
      params: { category: category },
    });
  };

  const renderInputs = () => {
    return fields.map((field) => {
      return (
        <TextField
          value={category[field.label]}
          label={field.label}
          onChange={(e) =>
            setCategory({ ...category, [field.label]: e.target.value })
          }
        />
      );
    });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}
        >
          {renderInputs()}
          <button style={{ maxWidth: '10%' }}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
