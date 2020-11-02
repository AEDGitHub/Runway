const one = "one"
const few = "few"
const sev = "sev"

class CoarseNum {
  constructor(quantity, size) {
    this._quantity = quantity
    this._size = size
  }

  getQuantity() {
    return this._quantity
  }
  getSize() {
    return this._size
  }

  quantityToString() {
    switch (this._quantity) {
      case one:
        return "One"
      case few:
        return "Few"
      case sev:
        return "Several"
    }
  }

  setSize(newSize) {
    if (Number.isInteger(newSize)) {
      this._size = newSize
    } else {
      throw new TypeError("The size entered was not of type Integer.")
    }
  }

  setQuantity(newQuantity) {
    if ([one, few, sev].includes(newQuantity)) {
      this._quantity = newQuantity
    } else {
      throw new TypeError(
        `Please enter "${one}", "${few}", or "${sev}" to change a CoarseNum quantity.`
      )
    }
  }
}

module.exports = { CoarseNum, one, few, sev }
