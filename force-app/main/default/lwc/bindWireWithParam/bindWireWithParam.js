import { LightningElement, wire } from 'lwc';
import getAccountsByName from '@salesforce/apex/AccountController.getAccountsByName';


export default class BindWireWithParam extends LightningElement {

    searchKey='';
    
    @wire(getAccountsByName, { name: '$searchKey' })
    accounts;

    handleChange(event){
        this.searchKey = event.target.value;
    }

//     Complete flow

// Suppose the user types Acme.

// 1. User types "Acme"
//           ↓
// 2. onchange fires
//           ↓
// 3. handleChange(event)
//           ↓
// 4. searchKey = "Acme"
//           ↓
// 5. @wire detects $searchKey changed
//           ↓
// 6. getAccountsByName({
//        accountName: "Acme"
//    })
//           ↓
// 7. Apex searches Account
//           ↓
// 8. Apex returns List<Account>
//           ↓
// 9. accounts.data contains the Accounts
//           ↓
// 10. HTML displays account.Name

// Explain this wire with parameter code", you can say:

// "@wire is used to call the Apex method reactively. 
// accountName: '$searchKey' passes the value of the searchKey property as a parameter to Apex, and $ makes it reactive,
//  so whenever searchKey changes, 
// the wire service can invoke the Apex method again. The response is stored in accounts, which contains data and error."
        


   
}