import { LightningElement, wire } from 'lwc';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';

export default class BindWireWithFunction extends LightningElement {

    accounts;
    error;


    @wire(getRecentAccounts)
    wiredAccount({data,error})
    {
        if(data)
        {
               this.accounts=data;
               this.error=undefined;

        }
        else if(error){
            this.error=error;
            this.accounts=undefined;
        }
    }
}