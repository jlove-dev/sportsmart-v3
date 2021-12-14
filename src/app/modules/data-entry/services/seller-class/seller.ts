export class Seller {
  constructor(
    vendorID: string,
    phoneNum: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    salesFigures: salesFigures,
    items: itemTotals
  ) {}
}

export class salesFigures {
  constructor(
    totalSold: number,
    vendorCut: number,
    troopCut: number
  ){}
}

export class itemTotals {
  constructor(
    active: [items],
    sold: [items]
  ){}
}

export class items {
  constructor(
    barCode: string,
    category: string,
    price: string
  ) {}
}
