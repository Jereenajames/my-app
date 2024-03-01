
import Container from 'react-bootstrap/esm/Container';
import './App.css';
import SideNav from './components//sidenav/sidenav'
import Homepage from './components/pages/Homepage';
import User from './components/pages/User';
import Userrole from './components/pages/Userrole';
import { Details } from './components/pages/Details';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
     <SideNav />
       <Router>
        <Container className='page-container'>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/user" exact element={<User />} />
            <Route path="/userrole" exact element={<Userrole />} />    
            <Route path='/userrole/:id' element={<Details/>}     />   
          </Routes>
        </Container>
       </Router>
    </>
  );
}

export default App;
