import React, { useEffect, useState } from 'react'
import abc from './amazon.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Render = () => {
    let navi = useNavigate()
    let [data, ChangeData] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((e) => {
                ChangeData(e.data.products)
            })
            .catch(() => {
                console.log("Went wrong");
            })
    },[])

    let addToCart = (prod) => {
        console.log(prod);
        axios.post('http://localhost:3000/products', prod)
            .then(() => {
                console.log(prod)
            })
            .catch(() => {
                console.log("Wrong");
            })

        navi('/b')
        console.log("Added to cart successfully");
    }

    return (
        <div>
            <div>
                <div className="dummydiv">
                    {
                        data.map((e) => {
                            return (
                                <div>
                                    <div className={abc.maindummy}>

                                        <div className={abc.imgdiv}>
                                            <img src={e.thumbnail} className={abc.imgup} alt="" />
                                        </div>
                                        <div className={abc.datadiv}>
                                            <h3>Brand : {e.brand}</h3>

                                            <h3>Model : {e.title}</h3>
                                            <h3>Description : {e.description}</h3>
                                            <h3> Price :{e.price}</h3>
                                            <h3>Original Price : {parseInt(e.price - e.price * e.discountPercentage / 100)}</h3>
                                            <h3>Review : {e.rating}</h3>
                                            <button onClick={()=>{addToCart(e)}}>add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Render
