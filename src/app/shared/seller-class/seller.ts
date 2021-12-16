import {salesFigures} from "../sales-figures-class/sales-figures";

export interface Seller {
  vendorID: string,
  phoneNum: string,
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  salesFigures: salesFigures,
}
