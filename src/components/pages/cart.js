import React from 'react'
import { Link } from "react-router-dom"


import Navbar from '../navbar'

export default function Cart(props) {
    return (
        <div className='page-wrapper'>
            <Navbar />

            <div className='content-wrapper'>
                <h1>The shopping cart goes here</h1>
            </div>

        </div>
    )
}