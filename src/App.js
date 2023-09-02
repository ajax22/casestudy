import "./App.css";
import Users from "./components/Users";
import ApiProvider from "./context/ApiContext";

function App() {
  return (
    <div className='App'>
      <ApiProvider apiUrl={"https://jsonplaceholder.typicode.com/users"}>
        <Users />
      </ApiProvider>
    </div>
  );
}

export default App;
