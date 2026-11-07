public with sharing class GetAccounts {
    public GetAccounts() {

    }

    @AuraEnabled
    public static List<Account> getRecentTenAccounts()
    {
       return [select id,name from Account order by createddate desc limit 10];

    }

     @AuraEnabled(cacheable=true)
    public static List<Account> getAccountByName(String name)
    {
        String name1='%' + name + '%';
       return [select id,name from Account Where name Like:name1];

    }
}