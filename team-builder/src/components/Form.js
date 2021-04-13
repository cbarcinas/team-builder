import React, { useState } from "react";
import "../components/FormStyle.css";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    role: "",
  });

  // input change on form inputs
  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setForm({ username: "", email: "", role: "" });
  };

  //form submit

  return (
    <>
      <div className="form-container">
        <form onSubmit={submitHandler} className="user-form">
          <label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={onInputChange}
              maxLength={30}
            />
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={onInputChange}
              maxLength={30}
            />
            <select name="role" onChange={onInputChange}>
              <option selected>Front-End Developer</option>
              <option>Back-End Developer</option>
              <option>UX/UI Designer</option>
            </select>
          </label>
          <input type="button" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
