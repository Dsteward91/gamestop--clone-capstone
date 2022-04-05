import React, { Component }from 'react'; 
import axios from 'axios'


import '../../style/products'


export default class Product extends Component {

    constructor() {
        super()

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const getProduct = async () => {
            const exclusiveProduct = new Product 
            let productData = {}

        

            await axios.get("https://gamestopclone.herokuapp.com/product/get")
            .then(response => response.json())
            .then(data => productData = data)
            .catch(error => console.log("Error getting product", error))
            
        }

            

    }
    
    render() {
        return (
            <div className="product-page-wrapper">                
                
                <div className="content-wrapper">                    
                    <div className='products'>
                        <p className="product">{this.state.data.product}</p> 
                    </div>
                            
                
                </div>
            </div>
        );
    }}