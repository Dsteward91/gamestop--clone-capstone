import React, { Component } from "react";
import axios from 'axios'

import orderform from '../../style/orderform'
import Navbar from '../navbar'

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productInput: "",
      priceInput: "",
      loading: false,
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      loading: true,
      error: false,
    });

      fetch("https://gamestopclone.herokuapp.com/product/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        product: this.state.productInput,
        price: parseFloat(this.state.priceInput),
      }),
    })
      .then((response) => response.json())
      
      .then((data) => {
        if (data.id) {
          this.props.history.push("./product");
        }
      })
      .catch((error) => {
        console.log("Error adding product ", error);

        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  render() {
    return (
      
      <div className="add-product-wrapper">
        <Navbar />

        <h2>Add Product</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Product"
            name="productInput"
            value={this.state.productInput}
            onChange={this.handleChange}
          />

          <input
            type="text"
            placeholder="price"
            name="priceInput"
            value={this.state.priceInput}
            onChange={this.handleChange}
          />

          <button type="submit" disabled={this.state.loading}>
            Submit your Product
          </button>
        </form>

        {this.state.loading ? (
          <div className="loading">Submitting...</div>
        ) : null}

        {this.state.error ? (
          <div className="error">
            An error occured... Please try again later.
          </div>
        ) : null}
      </div>
    );
  }
}