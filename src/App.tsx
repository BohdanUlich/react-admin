import "./App.css";
import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UsersList } from "./components";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UsersList} />
    </Admin>
  );
}

export default App;
