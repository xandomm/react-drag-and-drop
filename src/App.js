import React from "react";

import List from "./components/List";
import Form from "./components/AddComponent";
import { filter } from "./redux/cardSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <input
        type="text"
        placeholder="Search"
        class="form-control form-control-lg"
        onChange={(e) => dispatch(filter(e.target.value))}
      />
      <List />
      <Form />
    </div>
  );
}

export default App;
