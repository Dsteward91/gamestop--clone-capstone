import React, { Component } from 'react'

export default class ProductInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: "",
            productPrice: "",
            loading: false,
            error: false 
        }
    }
}