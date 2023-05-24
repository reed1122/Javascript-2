import logo from './logo.svg';
import './App.css';
import {Greet, Greet2, Greet3 } from "./components/Greet";
import {Welcome, Welcome2} from "./components/Welcome";
import Message from "./components/message";
import Counter from "./components/Counter";


function App() {
  return (
    <div className="App">
     {/* {  <Greet name="Corey" nickname="Cor">
        <button>Vist Website</button>
        <p>Hello World! This is my paragraph</p>
        </Greet>
      <Greet name="Hayden" nickname="Hayd"/>
      <Greet2 name="Hayden" nickname="Hayd"/>
      <Greet3 name="Bob" nickname="Bobby"/>
      <Welcome name="Corey" nickname="Cor"/>
      <Welcome name="Hayden" nickname="Hayd"/>
      <Welcome2 name="Bob" nickname="Bobby"/>
      <Welcome2 name="Hayden" nickname="Hayd"/>} */}
      <Message />
      <Counter />
    </div>
  );
}

export default App;
