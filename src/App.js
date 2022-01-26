import { useState } from "react";
import "./styles.css";

function Button(props) {
  const handleClick = () => props.onClick(props.increment);
  return <button onClick={handleClick}>{props.increment}</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

function Container() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (val) => {
    setCounter(counter + val);
  };
  return (
    <div>
      <Button onClick={incrementCounter} increment={1} />
      <Button onClick={incrementCounter} increment={5} />
      <Button onClick={incrementCounter} increment={10} />
      <Display message={counter} />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Container />
    </div>
  );
}
