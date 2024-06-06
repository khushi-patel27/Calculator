import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";
import './App.css';

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {

      try {
        const result = new Function(`return ${calVal}`)();
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }

    
    } 
    
    else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
