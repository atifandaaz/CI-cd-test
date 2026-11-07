import { LightningElement } from 'lwc';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';

export default class DeleteAccountForTesting extends LightningElement {
    accounts;
    error;
    

    @wire(getRecentAccounts)
    WiredAccount({data,error})
    if(data)
    {
        this.accounts=accounts;
        this.error=
    }


}