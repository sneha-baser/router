import {NavLink} from 'react-router-dom'
function Menu() {
    return (
     
    <>
    <NavLink to='/about'>About Us</NavLink>
    <NavLink to='/contact/vinod/thapa'>Contacts</NavLink>
    <br/>
    <a href='/about'>About Us</a>
    <a href='/contact/vinod/thapa'>Contacts</a>
    </>
      
    );
  }
export default Menu;