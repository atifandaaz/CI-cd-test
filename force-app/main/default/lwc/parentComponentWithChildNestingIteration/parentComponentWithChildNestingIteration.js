import { LightningElement } from 'lwc';
import getAccountsByName from '@salesforce/apex/AccountController.getAccountsByName';


export default class ParentComponentWithChildNestingIteration extends LightningElement {

    myAccounts;
    error;
    handleSearch(event) {
        const searchKey = event.target.value;
        getAccountsByName({ name:searchKey })
            .then((result) => {
                this.myAccounts = result;
                this.error = undefined;
            })
            .catch((error) => {
                console.error('Error fetching accounts:', error);
                this.error = error;
            });
    }
}