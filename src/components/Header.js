import React from "react";

const Header = () => {
  return (
    <div style={{
        marginTop:"20px", 
        height:"100px", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center",
        border: "1px solid white",
        borderRadius:"50px"}}> 
      <h1 style={{color:"#a34cd9", textDecoration:"none", fontWeight:"bold"}}>USER-DATA HANDLER</h1>
    </div>

  );
}

export default Header;