import './App.css';
import { Profile, UserList } from './components'
//Context
import UserState from './context/User/UserState'
//Estilos
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <UserState>
      <Profile />
      <UserList />
    </UserState>
  );
}

export default App;
