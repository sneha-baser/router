import React from 'react';
import './App.css';
const Image = (props) =>{
    const img=`https://source.unsplash.com/400x400/?${props.name}`
    console.log(img);
    return (
        <>
        <img  className="imm" src={img} alt="unable to load"/>
        </>
    )
}
export default Image;