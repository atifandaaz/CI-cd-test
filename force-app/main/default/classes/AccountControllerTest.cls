@IsTest
private class AccountControllerTest {
    @IsTest
    static void returnsTenMostRecentlyCreatedAccounts() {
        List<Account> accounts = new List<Account>();
        Datetime baseDate = Datetime.newInstance(2024, 1, 1);

        for (Integer i = 0; i < 12; i++) {
            accounts.add(new Account(Name = 'Recent Account ' + i));
        }
        insert accounts;

        for (Integer i = 0; i < accounts.size(); i++) {
            Test.setCreatedDate(accounts[i].Id, baseDate.addDays(i));
        }

        Test.startTest();
        List<Account> result = AccountController.getRecentAccounts();
        Test.stopTest();

        System.assertEquals(10, result.size(), 'The method should return exactly ten accounts.');
        System.assertEquals('Recent Account 11', result[0].Name, 'The newest account should be first.');
        System.assertEquals('Recent Account 2', result[9].Name, 'The tenth newest account should be last.');
    }
}
