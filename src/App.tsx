import AuthForm from "./components/AuthForm/AuthForm";
import Header from "./components/Header/Header";
import HeaderButton from "./components/Button/HeaderButton/HeaderButton";
import "./App.css";

function App() {
  return (
    <div className="">
      <Header name="I am de header" />
      <AuthForm />
      <HeaderButton onClick={() => console.log("clicked")}>
        <span>Header Button</span>
      </HeaderButton>
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default App;
