import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Price = () => {
    let [data, changeData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((e) => {
                changeData(e.data)
            })
    })
    let x = [2, 3, 4]
    return (
        <div>
             

            {
                //   data.map((e)=>{
                //     return(
                //         <div>
                //             Total Price : <h1>{e.price} </h1>
                //         </div>
                //     )
                //   })

              


                data.filter(e=>e.price>100).map((e)=>{
                    return(
                        <div>
                            {
                                e.price
                            }
                            {
                                e.brand
                            }
                        </div>
                    )
                })

            }
            <div>
                {/* {
            // .map((e)=>{
            //     return(
            //         <div>
            //             {e.id}
            //         </div>
            //     )
            // })
            )
        } */}
            </div>
        </div>
    )
}

export default Price
