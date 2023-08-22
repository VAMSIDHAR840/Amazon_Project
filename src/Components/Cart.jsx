import axios from 'axios'
import React, { useEffect, useState } from 'react'
import abc from './amazon.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  let navi = useNavigate()
  let [data, ChangeData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((e) => {
        ChangeData(e.data)
      })
  }, [])

  let del = (e) => {
    axios.delete(`http://localhost:3000/products/${e}`)
    navi('/a')
  }

  return (
    <div>
      {
        data.map((e) => {
          return (
            <div>
              <div className={abc.maindummy}>

                <div className={abc.imgdiv}>
                  <img src={e.thumbnail} alt="" />
                </div>
                <div className={abc.datadiv}>
                  <h3>{e.title}</h3>
                  <h3>{e.description}</h3>
                  <h3>{e.price}</h3>
                  <h3> {parseInt(e.price - e.price * e.discountPercentage / 100)}</h3>
                  <h3>{e.brand}</h3>
                  <h3>{e.rating}</h3>
                  <Link to='/a' className={abc.btns}>Back to Home</Link>
                  <Link to='/a' onClick={() => { del(e.id) }}>Delete a Product from the Cart</Link>

                </div>


              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Cart
