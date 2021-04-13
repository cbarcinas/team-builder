import React, { useState } from "react";
import "../components/FormStyle.css";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="form-container">
        <form className="user-form">
          <label>
            Add Team Member :
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={onInputChange}
              maxLength={30}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onInputChange}
              maxLength={30}
            />
          </label>
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Form;
