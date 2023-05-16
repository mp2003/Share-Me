import React, { useEffect } from "react";
import { router, route, useNavigate, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { fetchUser } from "./utils/fetchUser";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate("/login");
  }, []);

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
