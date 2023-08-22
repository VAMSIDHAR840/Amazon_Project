import React, { useEffect, useState } from 'react'
import abc from './amazon.module.css'
import { Link } from 'react-router-dom'
const Child = () => {
    
    return (
        <div>
            <div className={abc.maindiv1}>
                <section>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFe_NbxZW-jwfwNUiFYk81thn-FlxpR-eNbg&usqp=CAU" alt="" />

                </section>
                <section>
                    <Link to='/a'> Select Your Products </Link>
                </section>
                <section>
                    <input type="text" placeholder='Search Amazon.in' name="" id="" />
                </section>
                <section>
                    <Link to='/price'>
                        Price Details
                    </Link>
                </section>
                <section>
                    <span>Hello,sign in</span>
                    <p>Account & Lists</p>
                </section>
                <section>
                    <span>Returns</span>
                    <p>& Orders</p>
                </section>
                <section className={abc.lastsec}>
                    <i></i>
                    <Link to='/b'>Cart</Link>

                </section>
            </div>
            <div className={abc.maindiv2}>
                <div className={abc.subdiv1}>
                    <h5><i>|||</i> All </h5>
                    <h5>Amazon minTV</h5>
                    <h5>Sell</h5>
                    <h5>Best Sellers</h5>
                    <h5>Today's Deals</h5>
                    <h5>Mobiles</h5>
                    <h5>New Releases</h5>
                    <h5>Customer Service</h5>
                    <h5>Prime</h5>
                    <h5>Electronics</h5>
                    <h5>Home&Kichen</h5>
                    <h5>Fashion</h5>
                </div>
                <div className="subdiv2">
                    <h4>New Launches from Mobiles,Electronies & many more|shop Now</h4>
                </div>
            </div>


        </div>
    )
}

export default Child
