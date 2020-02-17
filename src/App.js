import React from "react";
import Form from "./Form";

function App() {
  const handleOnSubmit = data => {
    console.log(data);
    alert(`Data submitted: ${JSON.stringify(data)}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form title="Person's Details" onSubmit={handleOnSubmit} />
      </header>
    </div>
  );
}

export default App;
