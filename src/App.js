
import './App.css';
import About from './About'
import Contacts from './Contacts'
import {Switch ,  Route } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';


function App() {
  return (
    <>
    <Menu/>
    <Search/>
    <Switch>
   
    <Route exact path="/about" component={()=><About name="about"/> }/>
    <Route  path="/contact/:fname/:lname" component={Contacts}/>
    </Switch>
    </>
    
  );
}
export default App;
