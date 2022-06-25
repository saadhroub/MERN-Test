import React, { useState } from "react";

import Form from "../components/Form";
import Chat from "../components/Chat";
const Main = () => {
  const [user, setUser] = useState(null);

  const changeUser = (name) => {
    setUser(name);
  };
  return (
    <>
      {!user && <Form changeUser={changeUser} />}
      {user && <Chat user={user} />}
    </>
  );
};

export default Main;
