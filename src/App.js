import React from "react";
import "./App.css";
import { DatePicker, Button } from "antd";

function App() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Welcome to Ant Design React App</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: "10px" }}>
        Button
      </Button>
    </div>
  );
}

export default App;
