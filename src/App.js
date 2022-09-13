import "./App.css";
import Navbar from "./components/navbar/Navbar";
import UserForm from "./components/userForm/UserForm";
import Table from "./components/table/Table";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <UserForm />
        <Table />
      </div>
    </>
  );
}

export default App;
