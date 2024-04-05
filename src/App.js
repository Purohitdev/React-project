import logo from './logo.svg';
import Home from "./componet/HOME/Home";
import Navb from './componet/Navb'
import './Home.css';
import Page from "./componet/Page/Page"
import Blog from './componet/Blog/Blog';
import Potfo from './componet/Potfo/Potfo'
import Footerr from './componet/footerr';
import Contact from './componet/Contact/Contact';
import { BrowserRouter as   Router , Routes,Route } from 'react-router-dom';








 
function App(){
  return( 
    <>
  
<Router>
         <Navb/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Page' element={<Page/>}/>  
          <Route path='/Potfo' element={<Potfo/>}/>  
          <Route path='/Blog' element={<Blog/>}/>  
          <Route path='/Contact' element={<Contact/>}/>       

     </Routes>
      <Footerr/>
    </Router>
 

    
  </>

  )
}

export default App;
