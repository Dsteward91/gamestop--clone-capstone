import React from 'react'
import { Link } from "react-router-dom"


import Navbar from '../navbar'

export default function tradeIns(props) {
    return (
        <div className='page-wrapper'>
            <Navbar />

            <div className='content-wrapper'>
                <h1>Trade in your games!</h1>
            </div>

        </div>
    )
}