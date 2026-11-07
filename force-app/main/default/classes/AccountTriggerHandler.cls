public with sharing class AccountTriggerHandler {


    public static void afterInsert(List<Account> newList) {
        // Add logic for after insert trigger event here
        List<Contact> conList=new List<Contact>();
        for(Account acc: newList)
        {

            Contact con = new Contact();
            con.AccountId = acc.Id;
            con.LastName='test101';
            con.FirstName='testFirstName';
            conList.add(con);
        }
        if(!conList.isEmpty())
        {
            insert conList;
        }
         
   
    }
   
}