import React ,{useState} from "react";
import './RegisterDeliveryPartner.css'
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets'

const RegisterDeliveryPartner = () => {
  const [action,setAction] =useState("register");
  return (
    <div className="container">
    <div className="header">
    <div className="text">{action}</div>
    <div className="underline"></div>
    </div>
    <div className="inputs">
    {action==="login"?<div></div>:<div className="input">
     <img src={assets.user_icon} alt=''></img>
     <input type="text" placeholder="name"></input>
    </div>}
    
    <div className="input">
     <img src={assets.email_icon} alt=''></img>
     <input type="email" placeholder="email-id"></input>
    </div>
    <div className="input">
     <img src={assets.password_icon} alt=''></img>
     <input type="password" placeholder="password"></input>
    </div>
    </div>
    {action==="register"?<div></div>:<div className="forgot-password"><NavLink to='/Forgetpass' style={{textDecoration:'none'}}>Frogot password?</NavLink> <span>click hear!</span></div>}
     {action==="login"?<div></div>:<NavLink to='/Details' style={{textDecoration:'none'}}><button className="registerbutton">Register yourself</button></NavLink>}
     {action==="register"?<div></div>:<NavLink to='/Front' style={{textDecoration:'none'}}><button className="registerbutton">Delivery dasbord</button></NavLink>}
    

     
    
    <div className="submit-contener">
     <div className={action==="login"?"submit gray":"submit"} onClick={()=>setAction("register")}>register</div>
      <div className={action==="register"?"submit gray":"submit"}  onClick={()=>setAction("login")}>log in</div>
    </div>
    </div>
  );
};


export default RegisterDeliveryPartner