import React, { createContext, useState } from 'react'
import ViewItems from './ViewItems'

export const UserData = createContext()

const AddItems = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [option, setOption] = useState("")
    const [img, setImg] = useState("")
    const [addImg1, setAddImg1] = useState("")
    const [addImg2, setAddImg2] = useState("")
    const [addImg3, setAddImg3] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Math.trunc(Math.random() * 1000),
            name,
            option,
            description,
            img,
            additionImages: [addImg1, addImg2, addImg3]
        };

        const existingItems = JSON.parse(localStorage.getItem("items")) || [];
        existingItems.push(newItem);
        localStorage.setItem("items", JSON.stringify(existingItems));
        setName("");
        setDescription("")
        setOption("")
        setAddImg1("")
        alert("Item successfully added");
    };


    return (
        <div>
            <form action="" className="center" style={{ paddingLeft: "550px", }} onSubmit={handleSubmit}>
                <div className="col-md-5" >
                    <label for="inputEmail4" className="form-label ">Item name</label>
                    <input type="name" className="form-control" id="inputEmail4" placeholder="Enter item name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='col-md-5'>
                    <label for="inputEmail4" className="form-label">Item type</label>
                    <select className="form-select" aria-label="Default select example" value={option} onChange={(e) => setOption(e.target.value)}>
                        <option selected>Category</option>
                        <option>Shirt</option>
                        <option>Pant</option>
                        <option>Shoes</option>
                        <option>Gear</option>
                    </select>
                </div>
                <div className=" col-md-5">
                    <label for="exampleFormControlTextarea1" className="form-label">Item description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="col-md-5">
                    <label for="formFile" className="form-label"> Item cover image</label>
                    <input className="form-control" type="text" id="formFile" value={img} onChange={(e) => setImg(e.target.value)} placeholder="Enter Cover Image URL" />
                </div>
                <div className="col-md-5">
                    <label for="formFile" className="form-label">Item additional image</label>
                    <input className="form-control" type="text" id="formFile" placeholder='Enter additional image URL' value={addImg1} onChange={(e) => setAddImg1(e.target.value)} />
                </div>
                <div className="col-md-5">
                    <label for="formFile" className="form-label">Item additional image</label>
                    <input className="form-control" type="text" id="formFile" placeholder='Enter additional image URL' value={addImg2} onChange={(e) => setAddImg2(e.target.value)} />
                </div>
                <div className="col-md-5">
                    <label for="formFile" className="form-label">Item additional image</label>
                    <input className="form-control" type="text" id="formFile" placeholder='Enter additional image URL' value={addImg3} onChange={(e) => setAddImg3(e.target.value)} />
                </div>
                <br />
                <div className='col-md-5'>
                    <button className='btn btn-outline-primary' type='submit'> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddItems