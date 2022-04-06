// import React, { Component }from 'react'; 
// import axios from 'axios'


// import '../../style/products'


// export default class Product extends Component {

//     constructor() {
//         super()

//         this.state = {
//             data: []
//         }
//     }

//     componentDidMount() {
//         const getProduct = async () => {
//             const exclusiveProduct = new Product 
//             let productData = {}        

//             await axios.get("https://gamestopclone.herokuapp.com/product/get")
//             .then(response => response.json())
//             .then(data => productData = data)
//             .catch(error => console.log("Error getting products", error))
            

//         }

//     }
    
//     render() {
//         const { data } = this.state;
//         return (
//             <div className="product-page-wrapper">                
                
//                 <div className="content-wrapper">      
//                     {data.map((data) => (
//                         <div className='products'>
//                             <p className="product">{this.state.data.product}</p> 
//                             <p className="price">{this.state.data.price}</p> 
//                         </div>
//                     ))}
                        
//                 </div>
//             </div>
//         );
//     }}


import React, { Component } from "react";
import axios from "axios";
import ProductInfo from './productfiller'

export default class SiteProducts extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch("https://gamestopclone.herokuapp.com/product/get")
      .then((response) => {
        this.setState({
          products: response.data.products,
        });
      })
      .catch((error) => {
        console.log("error getting products", error);
      });
  }

  componentWillMount() {
    this.getProducts();
  }

  render() {
    const productRecords = this.state.products.map((products) => {
      return <Products key={products.id} products={products} />;
    });

    return <div>{productRecords}</div>;
  }
}
