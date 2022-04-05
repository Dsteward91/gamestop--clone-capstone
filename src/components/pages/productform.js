
  
import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";
import RichTextEditor from "./rich-text-editor"

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      ProductDescription: "",
      ProductPricing: "",
      featured_image: "",
      apiUrl: "https://gamestopclone.herokuapp.com/product/add",
      apiAction: "post"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(
      this
    );

    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.featuredImageRef = React.createRef();
  }

  deleteImage(imageType) {
    axios
      .delete(
        `https://gamestopclone.herokuapp.com/product/${
          this.props.ProductDescription.id
        }?image_type=${imageType}`,
        { withCredentials: true }
      )
      .then(response => {
        this.props.handleFeaturedImageDelete();
      })
      .catch(error => {
        console.log("deleteImage error", error);
      });
  }

  componentWillMount() {
    if (this.props.editMode) {
      this.setState({
        id: this.props.blog.id,
        ProductDescription: this.props.product.ProductDescription,
        ProductPricing: this.props.product.ProductPricing,
        apiUrl: `https://gamestopclone.herokuapp.com/product/${
          this.props.ProductDescription.id
        }`,
        apiAction: "patch"
      });
    }
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }

  handleFeaturedImageDrop() {
    return {
      addedfile: file => this.setState({ featured_image: file })
    };
  }

  handleRichTextEditorChange(ProductPricing) {
    this.setState({ ProductPricing });
  }

  buildForm() {
    let formData = new FormData();

    formData.append("ProductDescription", this.state.ProductDescription);
    formData.append("ProductPricing", this.state.ProductPricing);

    if (this.state.featured_image) {
      formData.append(
        "product_description[featured_image]",
        this.state.featured_image
      );
    }

    return formData;
  }

  handleSubmit(event) {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm(),
      withCredentials: true
    })
      .then(response => {
        if (this.state.featured_image) {
          this.featuredImageRef.current.dropzone.removeAllFiles();
        }

        this.setState({
          ProductDescription: "",          
          ProductPricing: "",
          featured_image: ""
        });

        if (this.props.editMode) {
          
          this.props.handleUpdateFormSubmission(response.data.product);
        } else {
          this.props.handleSuccessfullFormSubmission(
            response.data.product
          );
        }
      })
      .catch(error => {
        console.log("handleSubmit for product error", error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            onChange={this.handleChange}
            name="ProductDescription"
            placeholder="Product Description"
            value={this.state.ProductDescription}
          />

          <input
            type="text"
            onChange={this.handleChange}
            name="ProductPricing"
            placeholder="Product Pricing"
            value={this.state.ProductPricing}
          />
        </div>

        <div className="one-column">
          <RichTextEditor
            handleRichTextEditorChange={this.handleRichTextEditorChange}
            editMode={this.props.editMode || null}
            contentToEdit={
              this.props.editMode && this.props.product.content
                ? this.props.product.content
                : null
            }
          />
        </div>

        <div className="image-uploaders">
          {this.props.editMode && this.props.product.featured_image_url ? (
            <div className="portfolio-manager-image-wrapper">
              <img src={this.props.product.featured_image_url} />

              <div className="image-removal-link">
                <a onClick={() => this.deleteImage("featured_image")}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.featuredImageRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleFeaturedImageDrop()}
            >
              <div className="dz-message">Featured Image</div>
            </DropzoneComponent>
          )}
        </div>

        <button className="btn">Save</button>
      </form>
    );
  }
}