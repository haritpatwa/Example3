import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import { BrowserRouter , Route,Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Route path="/"   exact={true} component={Login} />
      <Route path="/registration"   exact={true} component={Registration} />

      
       
    </div>
    </BrowserRouter>
  );
}

export default App;
