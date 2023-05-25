import AuthForm from "./Components/AuthForm/AuthForm";
import Header from "./Components/Header/Header";
import "./App.css";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="">
      <Header name="I am de header" />
      <Login />
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default App;
