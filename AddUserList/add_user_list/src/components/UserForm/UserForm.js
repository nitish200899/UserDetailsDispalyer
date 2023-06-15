import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./UserForm.module.css";

const initialState = {
  name: "",
  age: "",
};

const UserForm = (props) => {
  const [userInput, setUserInput] = useState(initialState);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [input]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUser({
      name: userInput.name,
      age: userInput.age,
      id: Math.random().toString(),
    });
    setUserInput(initialState);
  };
  return (
    <Card className={styles.card}>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          label="Username"
          id="user-name"
          value={userInput.name}
          onChange={(event) => inputChangeHandler("name", event.target.value)}
        />
        <Input
          type="number"
          label="Age (Years)"
          id="age"
          value={userInput.age}
          onChange={(event) => inputChangeHandler("age", event.target.value)}
        />
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>
    </Card>
  );
};

export default UserForm;
