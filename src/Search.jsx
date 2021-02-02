import React , {useState} from 'react';
import Image from './Image'
const Search=()=>{
    const [img,setimg] = useState("");
    const Inputevent=(event)=>{
        const data=event.target.value;
        setimg(data);
    };

    return (
    <>
    <div className="searchBar">
    <input type="text"
     placeholder="search here"
     value={img}
     onChange={Inputevent}></input>
    </div>
    {img===""?null:<Image name={img}/>}
    </>
    );

}
export default Search;