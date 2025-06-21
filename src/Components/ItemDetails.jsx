import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";

const ItemDetails = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("items"))
    item.forEach((ele) => {
      if (ele.id == id) {
        setProduct(ele)
      }
    })

  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <div className='mb-5'>
        {
          product && Object.keys(product).length > 0 &&
          <div className='container'>
            <div style={{ display: "flex" }}>
              <div className="container" style={{ width: "50%", height: "200px", width: "500px" }}>
                <img src={product.img} alt="no image" className='img-fluid' />
              </div>
              <div className="container" style={{ width: "50%", marginTop: "60px" }}>
                <h1 style={{ color: "gray" }}>Name: {product.name}</h1>
                <h3> type: {product.option}</h3>
                <h5 style={{ color: "gray" }}> Description:{product.description}</h5>
                <button className='btn btn-primary'>Enquire</button>
              </div>

            </div>
          </div>
        }
      </div>

      <div className="container mt-5">
        <Slider {...settings}>
          {product.additionImages &&
            product.additionImages.map((imageSrc, index) => (
              <div key={index} className="d-flex justify-content-center">
                <div
                  className="border border-danger rounded-3 p-2 bg-light"
                  style={{ width: "250px", height: "250px" }} >
                  <img
                    src={imageSrc}
                    alt="product"
                    className="img-fluid h-100 w-100 object-fit-contain"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}
export default ItemDetails