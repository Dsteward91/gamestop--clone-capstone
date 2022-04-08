    import React, { Component } from 'react'
import Navbar from '../navbar'

export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("https://gamestopclone.herokuapp.com/product/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                products: data,
                loading: false
            })
        })
        .catch(error => {
            console.log("Error getting products ", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderProducts() {
        const productsHtml = this.state.products.map(products => (
            <div className="product-wrapper" key={products.id}>
                <h3>{products.product}</h3>
                <p>${products.price}</p>
            </div>
        ))

        return productsHtml
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='product-page-wrapper'>
                    <h2>Products</h2>
                    <div className='product-wrapper'>
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className='product-page-wrapper'>
                    <h2>Products</h2>
                    <div className='product-wrapper'>
                        <div className="error">An error occured... Please try again later.</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='product-page-wrapper'>
                    <Navbar />
                    <h2>Products</h2>
                    <div className="product-wrapper">
                        {this.renderProducts()}
                    </div>
                </div>
            )
        }
    }
}
