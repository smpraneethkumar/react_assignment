import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewItems = (name) => {
    

    console.log(name);
    
  return (
    <div>
        <p>{name}</p>
    </div>
  )
}

export default ViewItems