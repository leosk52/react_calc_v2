import React, { useEffect, useState, useRef } from "react";
import Keyboard from "./Keyboard";

const Display = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [res, setRes] = useState("");
  const [display, setDisplay] = useState("");
  const ref = useRef();

  // useEffect(() => {
  //   console.log("first " + firstNumber);
  //   console.log("second " + secondNumber);
  //   console.log("res " + res);
  //   console.log("op " + operator);
  // });

  useEffect(() => {
    setDisplay(`${res}` || secondNumber + "" + operator + "" + firstNumber);
  }, [firstNumber, secondNumber, operator, res]);

  const onInputSubmit = (term) => {
    setFirstNumber(`${firstNumber}${term}`);
  };

  const onOperationSubmit = (op) => {
    if (!firstNumber && !secondNumber && !res && !operator) {
      setFirstNumber(op);
    } else {
      if (res === "") {
        // checo se alguma operacao ja foi feita, se sim,
        //refaz com os mesmos valores ao clicar no "="
        setSecondNumber(firstNumber);
        setFirstNumber(res);
        setOperator(op);
      } else {
        setSecondNumber(res);
        setRes("");
        setFirstNumber("");
        setOperator(op);
      }
    }
  };

  const onOneOperationSubmit = (term) => {
    if (term === "1/x") {
      if (!res) {
        setRes(Number(1 / firstNumber));
      } else {
        setRes(1 / res);
      }
    } else if (term === "exp2") {
      if (!res) {
        setRes(Number(firstNumber ** 2));
      } else {
        setRes(res ** 2);
      }
    } else if (term === "square") {
      if (!res) {
        setRes(Number(Math.sqrt(firstNumber)));
      } else {
        setRes(Math.sqrt(res));
      }
    }
  };

  const onCleanSubmit = (term) => {
    if (term === "<x") {
      if (res) {
        setFirstNumber("");
        setSecondNumber("");
        setOperator("");
      }
      setDisplay(display.slice(0, display.length - 1));
      //setFirstNumber(firstNumber.slice(0, firstNumber.length - 1));

      console.log(firstNumber);
      console.log(secondNumber);
      console.log(operator);
    }

    //value={`${res}` || secondNumber + "" + operator + "" + firstNumber}
  };

  const onResSubmit = () => {
    let resul = "";

    if (operator === "+") {
      resul = Number(secondNumber) + Number(firstNumber);
    } else if (operator === "-") {
      resul = Number(secondNumber) - Number(firstNumber);
    } else if (operator === "/") {
      resul = Number(secondNumber) / Number(firstNumber);
    } else if (operator === "x") {
      resul = Number(secondNumber) * Number(firstNumber);
    } else if (operator === "%") {
      resul = (Number(secondNumber) * Number(firstNumber)) / 100;
    } else {
      return res;
    }

    setRes(resul);
    setSecondNumber(resul);
  };

  return (
    <div className="display">
      <input
        ref={ref}
        value={display}
        onChange={onInputSubmit || onOperationSubmit || onResSubmit}
      ></input>
      <Keyboard
        onInputSubmit={onInputSubmit}
        onResSubmit={onResSubmit}
        onOperationSubmit={onOperationSubmit}
        onOneOperationSubmit={onOneOperationSubmit}
        onCleanSubmit={onCleanSubmit}
      />
    </div>
  );
};

export default Display;
