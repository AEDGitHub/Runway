class CoarseNum {
  constructor(quantity, size) {
    this.quantity = quantity
    this.size = size
  }

  get quantity() {
    return this.quantity
  }
  get size() {
    return this.quantity
  }

  quantityToString() {}

  set size(newSize) {
    if (Number.isInteger(newSize)) {
      this.size = newSize
    } else {
      throw new TypeError("The size entered was not of type Integer.")
    }
  }

  set quantity(newQuantity) {
    if (["one", "few", "sev"].includes(newQuantity)) {
      this.quantity = newQuantity
    } else {
      throw new TypeError(
        `Please enter ${"one"}, ${"few"}, or ${"sev"} to change a CoarseNum quantity.`
      )
    }
  }
}

export default CoarseNum
