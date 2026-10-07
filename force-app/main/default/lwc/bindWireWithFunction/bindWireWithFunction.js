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

    // Wire with Function allows us to handle the Apex response programmatically. 
    // The wire service provides data and error, and based on the result
    //  we assign the data to accounts or the error to error. 
    // It is useful when we need custom logic after receiving the response.
}