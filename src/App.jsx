
import './App.css';
import {AppRoutes} from "./AppRoutes"
import { Loader } from './Loader';
import { useUserDetails } from './authentication';
function App() {
  const {user,isloading}=useUserDetails();
  if(isloading){
    return <Loader/>
  }
  return (
  <div className="App">
    <AppRoutes user={user}></AppRoutes>
  </div>
  );
}

export default App;
