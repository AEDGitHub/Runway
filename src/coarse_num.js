const zro = "zro"
const one = "one"
const few = "few"
const svl = "svl"

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
      case zro:
        return "Zero"
      case one:
        return "One"
      case few:
        return "Few"
      case svl:
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
    if ([zro, one, few, svl].includes(newQuantity)) {
      this._quantity = newQuantity
    } else {
      throw new TypeError(
        `Please enter "${zro}" "${one}", "${few}", or "${svl}" to change a CoarseNum quantity.`
      )
    }
  }
}

module.exports = { CoarseNum, zro, one, few, svl }
