import { LightningElement } from 'lwc';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';

export default class BindImperativeMethod2 extends LightningElement {

    accounts;
    error;

    buttonClickHandler() {
        getRecentAccounts()
            .then((result) => {
                this.accounts = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined;
            });
    }
}