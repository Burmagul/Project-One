import React from "react";
 import Click from "./CLick"
const Render = ({ props }) => {
  return (
    <div className="conteiner">
      {props?.map((item) => (
       
        <div onClick={()=>Click(item.id)} className="cart">
          
          <img className="images" src={item.image} alt="foto"  ></img> 
          <h2> {item.firstName}</h2>
          <p>{item.email}</p>
          <p>{item.gender}</p>
          <p>{item.carModel}</p>
           
        </div>
      ))}
    </div>
  );
};

export default Render;
