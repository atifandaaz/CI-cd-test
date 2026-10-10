import { LightningElement, wire } from "lwc";
import { getSObjectValue } from "@salesforce/apex";
import Name_FIELD from "@salesforce/schema/Account.Name";
import Phone_FIELD from "@salesforce/schema/Account.Phone";
import Industry_FIELD from "@salesforce/schema/Account.Industry";
import getSingleAccount from "@salesforce/apex/AccountController.getSingleAccount";

export default class BinUsingApexSchemaInLWC extends LightningElement {
  @wire(getSingleAccount)
  account;

  get name() {
    return this.account.data
      ? getSObjectValue(this.account.data, Name_FIELD)
      : "";
  }

  get phone() {
    return this.account.data
      ? getSObjectValue(this.account.data, Phone_FIELD)
      : "";
  }

  get industry() {
    return this.account.data
      ? getSObjectValue(this.account.data, Industry_FIELD)
      : "";
  }
}
