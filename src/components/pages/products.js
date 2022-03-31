import React, { Component } from 'react';
import Navbar from "../navbar"



export default class App extends Component {
    constructor() {
        super()

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const getProduct = async () => {
            const now = new Product()
            let productData = {}

            await fetch("https://127.0.0.1:5000/product/get")     
            .then(response => response.json())
            .then(data => productData = data)
            .catch(error => console.log("Error getting product", error))
            
            
            fetch("https://127.0.0.1:5000/product/get")
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => console.log("Error getting product", error))


        }

        getProduct()
    }

    render() {
        return (
        <div className="page-wrapper">
            <Navbar />

            <div className="content-wrapper">
                <Navbar />  
                <h1>Heres my products!</h1>
            </div>
        </div>
        );
    }
}