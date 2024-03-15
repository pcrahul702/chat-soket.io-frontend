
import './App.css';
import {AppRoutes} from "./AppRoutes"
import { useUserDetails } from './authentication';
function App() {
  const {user,isloading}=useUserDetails();
  return (
  <div className="App">
    <AppRoutes user={user}></AppRoutes>
  </div>
  );
}

export default App;
