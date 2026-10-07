import { LightningElement, wire } from 'lwc';
import getAccountsByName from '@salesforce/apex/AccountController.getAccountsByName';


export default class BindImperativeWithParam extends LightningElement {

    searchKey='';
    accounts;
    error;

    handleChange(event){
        this.searchKey = event.target.value;
    }

    handleSearch() {
        
        getAccountsByName({name: this.searchKey})
        .then((result)=>{
          
            this.accounts=result;
            this.error=undefined;
        })
        .catch((error)=>{
            this.error=error;
            this.accounts=undefined;
        })
         
    }

}