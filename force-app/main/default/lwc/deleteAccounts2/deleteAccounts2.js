
import { LightningElement, wire } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';

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

    async deleteAccount(event) {

        const accountId = event.currentTarget.dataset.id;

        await deleteRecord(accountId);

        await refreshApex(this.wiredAccounts);
    }

    get noAccounts() {
        return this.accounts.length === 0;
    }
}

