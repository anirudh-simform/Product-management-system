import { Product } from "./product.js";
class System {
  #productsArray;

  constructor() {
    this.#productsArray = [];
  }

  getProductList() {
    return this.#productsArray;
  }

  addProduct(product) {
    this.#productsArray.push(product);
  }

  getProductIndex(productId) {
    for (let i = 0; i < this.#productsArray.length; i++) {
      if (this.#productsArray[i].getProductId() == productId) {
        return i;
      }
    }
  }

  getJSONArray() {
    const JSONArray = [];
    this.#productsArray.forEach((product) => {
      const productObject = {};
      productObject["productId"] = product.getProductId();
      productObject["productName"] = product.getProductName();
      productObject["productPrice"] = product.getPrice();
      productObject["productImage"] = product.getImage();
      productObject["productDescription"] = product.getDescription();
      JSONArray.push(productObject);
    });
    return JSON.stringify(JSONArray);
  }

  editProduct(
    productId,
    productName,
    productPrice,
    productImage,
    productDescription
  ) {
    const index = this.getProductIndex(productId);
    this.#productsArray[index].setProductName(productName);
    this.#productsArray[index].setImage(productImage);
    this.#productsArray[index].setPrice(productPrice);
    this.#productsArray[index].setDescription(productDescription);
  }

  removeProduct(productId) {
    let index;

    for (let i = 0; i < this.#productsArray.length; i++) {
      if (this.#productsArray[i].getProductId() == productId) {
        index = i;
        break;
      }
    }

    this.#productsArray.splice(index, 1);
    this.correctProductId();
  }

  correctProductId() {
    for (let i = 0; i < this.#productsArray.length; i++) {
      this.#productsArray[i].setProductId(i + 1);
    }

    Product.setCounter(this.#productsArray.length);
  }

  filterByProductId(productId) {
    const filteredArray = this.#productsArray.filter(
      (product) => product.getProductId() == productId
    );

    return filteredArray;
  }

  sortedByProductId() {
    return this.#productsArray.toSorted(
      (a, b) => a.getProductId() - b.getProductId()
    );
  }

  sortedByProductName() {
    return this.#productsArray.toSorted((a, b) =>
      a.getProductName().localeCompare(b.getProductName())
    );
  }

  sortedByPrice() {
    return this.#productsArray.toSorted((a, b) => a.getPrice() - b.getPrice());
  }
}

export { System };
