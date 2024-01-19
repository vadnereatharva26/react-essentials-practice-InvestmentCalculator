import React from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        // [inputIdentifier]: newValue,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeValue={handleChange} inputByUser={userInput} />
      {inputIsValid ? (
        <Results inputByUser={userInput}></Results>
      ) : (
        <p className="center">Enter a valid year for duration(>0)</p>
      )}
    </>
  );
}

export default App;
