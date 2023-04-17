import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import SideBarRoute from './layout/sidebarRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './component/landing/landing';
import Login from './component/login/login';


function App() {
  return (
    <Router>
        <Routes>
          <Route  path='/' element={<Landing/>}/>
          <Route  path='/Login' element={<Login/>}/>  
          <Route  path='/*' element={<SideBarRoute/>}/> 
        </Routes>
    </Router>
  );
}

export default App;
