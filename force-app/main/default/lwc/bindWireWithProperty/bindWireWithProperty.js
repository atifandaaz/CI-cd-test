import { LightningElement,wire } from 'lwc';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';

export default class BindWireWithProperty extends LightningElement {
    @wire(getRecentAccounts)
    accounts;
}