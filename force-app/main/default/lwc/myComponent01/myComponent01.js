import { LightningElement ,wire} from 'lwc';
import getAccountByName from '@salesforce/apex/GetAccounts.getAccountByName';

export default class MyComponent01 extends LightningElement {
    searchKey1 = '';
    accounts;
    error;
    
//    handleClick() {
//         // Handle the button click event
//         console.log('Button clicked!');

//         getRecentTenAccounts()
//         .then(result=>{this.accounts = result;})
//         .catch(error=>{this.error = error;});

    
//     }

handleSearchKeyChange(event) {
    
        this.searchKey1 = event.target.value;

}
    @wire(getAccountByName,{name:'$searchKey1'})
    
    wiredAccounts({data,error})
    {
        if(data)
        {
            this.accounts=data;
            this.error=undefined;
        }
        else if(error)
        {
            this.error=error;
            this.accounts=undefined;
        }
    }

}