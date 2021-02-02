import {Route,Switch, useHistory, useLocation, useParams} from 'react-router-dom';
function Contacts() {
  const {fname , lname} = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);
  // console.log(location);
    return (
      <>
        <h1>you are in Contacts page of {fname}{lname}</h1>
        <p>{location.pathname}</p>
        {location.pathname==='/contact/bhavy/baser'?
        <button>Click me</button> 
        :
        <button onClick={()=>history.goBack()}> Don't Click me</button>}
        </>
      
    );
  }
export default Contacts;