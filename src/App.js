import "./App.css";
import Navbar from "./components/navbar/Navbar";
import UserForm from "./components/userForm/UserForm";
import Table from "./components/table/Table";
import { DataProvider } from "./context/DataForm";

function App() {


  return (
    <>
      <Navbar />
      <div className="App">
        <DataProvider>
          <UserForm />
          <Table />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
