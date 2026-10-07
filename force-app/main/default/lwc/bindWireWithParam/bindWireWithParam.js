import { LightningElement, wire } from 'lwc';
import getAccountsByName from '@salesforce/apex/AccountController.getAccountsByName';


export default class BindWireWithParam extends LightningElement {

    searchKey='';
    

    @wire(getAccountsByName, { name: '$searchKey' })
    accounts;

    handleChange(event){
        this.searchKey = event.target.value;
    }

        


   
}