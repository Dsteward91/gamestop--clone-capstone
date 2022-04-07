import React, { Component }from 'react'; 
import axios from 'axios'
import ProductInfo from './productfiller'


import '../../style/products'


export default class Product extends Component {

    constructor() {
        super()

        this.state = {
            data: []        
        }
        this.getProducts = this.getProducts.bind(this)
    }

          
        getProducts() {
            axios
                .get("https://gamestopclone.herokuapp.com/product/get")
                .then((response) => {
                    this.setState({
                    products: response.data.productData,
                    });
                })
                .catch((error) => {
                    console.log("error getting products", error);
                });
            }
    componentDidMount() { 
        this.getProducts();
    }
    
    render() {
        const { data } = this.state;
        return (                            
                
            <div className="content-wrapper">      
                {data.map((data) => (
                    <div className='products'>
                        <p className="product">{this.state.data.product}</p> 
                        <p className="price">{this.state.data.price}</p> 
                        
                    </div>
                ))}
                    
            </div>
            
        );
    }}


// import React, { Component } from "react";
// import axios from "axios";
// import ProductInfo from './productfiller'

// export default class SiteProducts extends Component {
//   constructor() {
//     super();

//     this.state = {
//       productData: [],
//     };

//     this.getProducts = this.getProducts.bind(this);
//   }

//   getProducts() {
    axios
      .get("https://gamestopclone.herokuapp.com/product/get")
      .then((response) => {
        this.setState({
          products: response.data.productData,
        });
      })
      .catch((error) => {
        console.log("error getting products", error);
      });
  }

//   componentWillMount() {
//     this.getProducts();
//   }

//   render() {
//     const productRecords = this.state.products.map((products) => {
//       return <Products key={products.id} products={products} />;
//     });

//     return <div>{productRecords}</div>;
//   }
// }
