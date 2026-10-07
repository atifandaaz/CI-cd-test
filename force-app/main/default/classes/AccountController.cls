public with sharing class AccountController {
@AuraEnabled(cacheable=true)
public static List<Account> getRecentAccounts() {
return [
    SELECT Id, Name, CreatedDate
    FROM Account
    ORDER BY CreatedDate DESC
    LIMIT 10
];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByName(String name) {

    String searchName = '%' + name + '%';
    return [
    SELECT Id, Name, CreatedDate
    FROM Account
    WHERE Name LIKE :searchName
    ORDER BY CreatedDate DESC
    LIMIT 10
    ];
}   @AuraEnabled(cacheable=true)
    Public static Account getSingleAccount() {
        return[
            SELECT Id, Name, Phone, Industry, Type
            FROM Account order by CreatedDate DESC
            LIMIT 1
        ];
    }

}