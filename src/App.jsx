import "./App.css";
import CounterClassComponent from "./components/CounterClassComponent";
import CounterFunctionComponent from "./components/CounterFunctionComponent";
import Switch from "./components/Switch";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <h1>App component</h1>
      {/* <CounterClassComponent />
      <CounterFunctionComponent />
      <Switch /> */}
      <UserForm />
    </div>
  );
}

// types of components -> function, class
//every component will have its own state

export default App;
