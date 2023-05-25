import AuthForm from "./Components/AuthForm/AuthForm";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="">
      <Header name="I am de header" />
      <AuthForm />
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default App;
