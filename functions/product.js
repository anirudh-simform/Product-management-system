class Product {
  #productId;
  #productName;
  #image;
  #price;
  #description;
  static #counter = 0;

  constructor(productName, image, price, description) {
    this.#productId = this.incrementProductId();
    this.#productName = productName;
    this.#image = image;
    this.#description = description;
    this.#price = this.#ConvertPrice(price);
  }

  #ConvertPrice(price) {
    const convertedPrice = Number(price);
    if (convertedPrice) {
      return convertedPrice;
    } else {
      alert(
        "Price can only take numeric values, on entering other types a default value of zero is set as price."
      );

      return 0;
    }
  }

  getProductId() {
    return this.#productId;
  }

  incrementProductId() {
    Product.#counter = Product.#counter + 1;
    return Product.#counter;
  }

  getProductName() {
    return this.#productName;
  }

  setProductName(productName) {
    this.#productName = productName;
  }

  getImage() {
    return this.#image;
  }

  setImage(image) {
    this.#image = image;
  }

  getDescription() {
    return this.#description;
  }

  setDescription(description) {
    this.#description = description;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(price) {
    this.#price = price;
  }
}

export { Product };
