import React, { useState } from 'react'

const AddItems = (name) => {
    const [name,setName] = useState("")

    const newItem = {
        name: name
    }
    const handleSubmit = (e)=>{
        e.perventDefault();
    }

    const nameValue = JSON.parse(localStorage.getItem("itemName")) || []

    nameValue.push(newItem)

    localStorage.setItem("itemName",JSON.stringify(nameValue))
 
    return (
        <div>
            <form action="" className="center" style={{ paddingLeft: "600px" }} onSubmit={handleSubmit}>
                <div className="col-md-6" >
                    <label for="inputEmail4" className="form-label">Item name</label>
                    <input type="name" className="form-control" id="inputEmail4" placeholder="Enter item name" value={name}  onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='col-md-4'>
                    <label for="inputEmail4" className="form-label">Item type</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Category</option>
                        <option value="1">Shirt</option>
                        <option value="2">Pant</option>
                        <option value="3">Shoes</option>
                        <option value="4">Gear</option>
                    </select>
                </div>
                <div className=" col-md-4">
                    <label for="exampleFormControlTextarea1" className="form-label">Item description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter description"></textarea>
                </div>
                <div className="col-md-4">
                    <label for="formFile" className="form-label"> Item cover image</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                 <div className="col-md-4">
                    <label for="formFile" className="form-label">Item additional image</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-outline-primary' type='submit'> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddItems