import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNav from "./shared/components/Nav/MainNav";

const App = () => {
  return (
    <BrowserRouter>
      <MainNav></MainNav>
      <main>
        <Routes>
          <Route path="/" element={<Users></Users>}></Route>
          <Route path="/places/new" element={<NewPlace></NewPlace>}></Route>
          <Route path="*" element={<Navigate replace to="/"></Navigate>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
