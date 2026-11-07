
import { LightningElement, wire } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteAccounts2 extends LightningElement {

    accounts = [];
    wiredAccounts;

    @wire(getRecentAccounts)
    getAccounts(result) {
        this.wiredAccounts = result;

        if (result.data) {
            this.accounts = result.data;
        }
    }

    // async deleteAccount(event) {

    //     const accountId = event.currentTarget.dataset.id;

    //     await deleteRecord(accountId);

    //     await refreshApex(this.wiredAccounts);
    // }
    deleteAccount(event)
    {
        console.log('Delete button clicked!');

        const recordId = event.currentTarget.dataset.recordId;
       
        deleteRecord(recordId)
        .then(()=>{
            console.log('Acount deleted succesfully');
            return refreshApex(this.wiredAccounts);
        })
        .catch(error => {
    const out = error?.body?.output;
    const msg = out?.errors?.[0]?.message
             || Object.values(out?.fieldErrors || {})[0]?.[0]?.message
             || error?.body?.message;
    this.dispatchEvent(new ShowToastEvent({
        title: 'Error deleting account',
        message: msg,
        variant: 'error'
    }));
});
    }

    connectedCallback() {
    console.log('DeleteAccounts2 component loaded');
    }
    get noAccounts() {
        return this.accounts.length === 0;
    }
}

