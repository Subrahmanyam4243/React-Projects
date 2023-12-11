import { Component } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
class MountingPhase extends Component {
  constructor() {
    console.log("constructor")
    super();
    this.state = {
      products: [],
      removeAllButtonText: "REMOVE All PRODUCTS",
      price: 0,
    };
  }

  componentDidMount() {
    console.log("cdm")
    // Fetch initial products
    this.fetchProducts();
  }

  fetchProducts = () => {
    console.log("fp")
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        this.setState(
          {
            products: response.data,
            removeAllButtonText: "REMOVE ALL PRODUCTS",
            price: this.state.products.reduce((a, val) => {
              return a + val.price;
            }, 0),
          },
          () => console.log(this.state.price)
        );
      })
      .catch((error) => {
        alert("something went wrong");
      });
  };

  handleClick = () => {
    console.log("hc")
    if (this.state.products.length === 0) {
      // If products array is empty, fetch new products
      this.fetchProducts();
    } else {
      // If products array is not empty, remove all products
      this.setState({
        products: [],
        removeAllButtonText: "RETRIEVE PRODUCTS",
      });
    }
  };
  //click to remove user selective product
  RemoveOneProduct = (item) => {
    console.log("rop")
    let ProductId = item.id;
    // console.log("productid",ProductId)

    this.setState((prevState) => ({
      products: prevState.products.filter((value) => value.id != ProductId),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("cdp")
    if (prevState.products !== this.state.products) {
      const newPrice = this.state.products.reduce((a, val) => a + val.price, 0);
      this.setState(
        {
          price: newPrice,
        },
        () => console.log(this.state.price)
      );
    }
  }

  render() {
    console.log("render")
    return (
      <>
        <h1
          style={{
            fontSize: 75,
            textAlign: "center",
            backgroundColor: "orange",
            color: "white",
          }}
        >
          Welcome
        </h1>
        <h4>Total price of products = {this.state.price}</h4>
        <RemoveAllButton
          remove={this.handleClick}
          text={this.state.removeAllButtonText}
        />
        {this.state.products.length > 0 ? (
          <Products
            products={this.state.products}
            cart={this.RemoveOneProduct}
          />
        ) : (
          <Loader />
        )}
      </>
    );
  }
}
export default MountingPhase;

class Loader extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}

class Products extends Component {
  componentWillUnmount() {
    alert("remove products");
  }
  render() {
    return (
      <div className="d-flex align-content-center justify-content-center flex-wrap">
        {this.props.products.map((value) => {
          return (
            <div
              className="card m-2"
              style={{ width: "calc(25% - 16px)" }}
              key={value.id}
            >
              <img src={value.image} height={300} alt={value.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.price}</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => this.props.cart(value)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
class RemoveAllButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.remove} className="btn btn-info">
          {this.props.text}
        </button>
      </div>
    );
  }
}
