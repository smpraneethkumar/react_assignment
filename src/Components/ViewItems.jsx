import React from "react";
import { Link } from 'react-router-dom'

const ViewItems = () => {

  const items = JSON.parse(localStorage.getItem("items"))

  return (
    <div style={{display:"flex",marginTop:"30px"}} className="container">
      {
        items && items.length > 0 ? items.map((ele) => (
        <Link to={`/item/${ele.id}`} style={{textDecoration:"none", color:"black"}}>
          <div  style={{border:"1px solid gray", borderRadius:"5px",width:"370px",textAlign:"center",height:"380px",margin:"10px"}}>
        <img src={ele.img} alt="" style={{width:"300px",height:"300px"}}/>
        <hr/>
        <h4 className="dis" style={{overflow:"hidden", textOverFlow:"ellipsis", whiteSpace:"nowrap"}}>{ele.name}</h4>
    </div>
      </Link>
        )) : 
        <div>
          <h2>sfsdff</h2>
      </div>
      }
    </div>
  )
}

export default ViewItems