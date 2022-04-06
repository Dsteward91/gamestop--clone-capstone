import React, { Component } from "react";
import SiteProducts from "./product";

export default class SiteContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="items-wrapper">
        <SiteProducts />
      </div>
    );
  }
}