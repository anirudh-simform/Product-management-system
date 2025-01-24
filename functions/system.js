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
