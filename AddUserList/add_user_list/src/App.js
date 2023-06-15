import React, { useState } from "react";

import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import CustomModal from "./components/UI/Modal/CustomModal";

function App() {
  const [userList, setUserList] = useState([]);
  const [errorModal, setErrorModal] = useState();

  const addUserHandler = (userData) => {
    if (userData.name.trim().length === 0 || userData.age.trim().length === 0) {
      setErrorModal({
        title: "Invalid Input",
        message: "Please enter a valid name and age. (non-empty values)",
      });
      return;
    } else if (+userData.age < 1) {
      setErrorModal({
        title: "Invalid age",
        message: "Please enter a valid age. (> 0)",
      });
      return;
    }
    setUserList((prevList) => [...prevList, userData]);
  };

  const modalCloseHandler = () => {
    setErrorModal(null);
  };

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      {errorModal && (
        <CustomModal
          title={errorModal.title}
          message={errorModal.message}
          onClose={modalCloseHandler}
        />
      )}
      {userList.length > 0 && <UserList list={userList} />}
    </div>
  );
}

export default App;
