import React from "react";

const Keyboard = ({
  onInputSubmit,
  onOperationSubmit,
  onResSubmit,
  onOneOperationSubmit,
  onCleanSubmit,
}) => {
  const onButtonClick = (number) => {
    onInputSubmit(number);
  };

  const onOperationClick = (term) => {
    onOperationSubmit(term);
  };

  const onResClick = () => {
    onResSubmit();
  };

  const onOneOperationClick = (term) => {
    onOneOperationSubmit(term);
  };

  const onCleanClick = (term) => {
    onCleanSubmit(term);
  };

  return (
    <div>
      <button onClick={() => onOneOperationSubmit("%")}>%</button>
      <button onClick={() => onCleanClick("CE")}>CE</button>
      <button onClick={() => onCleanClick("C")}>C</button>
      <button onClick={() => onCleanClick("<x")}>{"<x"}</button>
      <br />
      <button onClick={() => onOneOperationSubmit("1/x")}>1/x</button>
      <button onClick={() => onOneOperationSubmit("exp2")}>x^2</button>
      <button onClick={() => onOneOperationSubmit("square")}>
        RaizQuadrada
      </button>
      <button onClick={() => onOperationClick("/")}>{"/"}</button>
      <br />
      <button onClick={() => onButtonClick(7)}>7</button>
      <button onClick={() => onButtonClick(8)}>8</button>
      <button onClick={() => onButtonClick(9)}>9</button>
      <button onClick={() => onOperationClick("x")}>x</button>
      <br />
      <button onClick={() => onButtonClick(4)}>4</button>
      <button onClick={() => onButtonClick(5)}>5</button>
      <button onClick={() => onButtonClick(6)}>6</button>
      <button onClick={() => onOperationClick("-")}>-</button>
      <br />
      <button onClick={() => onButtonClick(1)}>1</button>
      <button onClick={() => onButtonClick(2)}>2</button>
      <button onClick={() => onButtonClick(3)}>3</button>
      <button onClick={() => onOperationClick("+")}>+</button>
      <br />

      <button onClick={() => onButtonClick("+/-")}>+/-</button>
      <button onClick={() => onButtonClick("0")}>0</button>
      <button onClick={() => onOperationClick(",")}>,</button>
      <button onClick={() => onResClick("=")}>=</button>
    </div>
  );
};

export default Keyboard;
