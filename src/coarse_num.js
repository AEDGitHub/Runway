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

  quantityToString() {
    switch (this.getQuantity()) {
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

  multiply(cN1, cN2) {
    const cN1Quan = cN1.getQuantity()
    const cN2Quan = cN2.getQuantity()

    // if either quantity is zero, the multiplicative quantity is zero, irrespective of size
    if (cN1Quan === zro || cN2Quan === zro) {
      const zroCN = new CoarseNum(zro, 0)
      return zroCN
    }

    // else, initial new size is additive combination of both input sizes
    const cN1Size = coarseNum1.getSize()
    const cN2Size = coarseNum2.getSize()
    const newCNSize = cN1Size + cN2Size

    //determine new
    let newCNQuan
    switch ([cN1Quan, cN2Quan]) {
      case [one, one]:
        newCNQuan = one
      case [one, few]:
      case [few, one]:
        newCNQuan = few
      case [one, sev]:
      case [sev, one]:
        newCNQuan = sev
      case [few, few]:
        newCNQuan = one
        newCNSize++
      case [few, sev]:
      case [sev, few]:
      case [sev, sev]:
        newCNQuan = few
        newCNSize++
      default:
        return "Something has gone horribly wrong!"
    }

    //return the new value
    return new CoarseNum(newCNQuan, newCNSize)
  }
}

module.exports = { CoarseNum, zro, one, few, svl }
