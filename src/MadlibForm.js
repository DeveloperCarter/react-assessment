import React, { useState } from "react";

const MadlibForm = ({ madlib }) => {
  const [formData, setFormData] = useState({
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    madlib(formData.noun1, formData.noun2, formData.adjective, formData.color);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="noun1"
        placeholder="noun1"
        value={formData.noun1}
      />
      <input
        onChange={handleChange}
        type="text"
        name="noun2"
        placeholder="noun2"
        value={formData.noun2}
      />
      <input
        onChange={handleChange}
        type="text"
        name="adjective"
        placeholder="adjective"
        value={formData.adjective}
      />
      <input
        onChange={handleChange}
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
      />
      <button>Submit</button>
    </form>
  );
};

export default MadlibForm;
