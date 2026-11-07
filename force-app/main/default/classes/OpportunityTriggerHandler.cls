public with sharing class OpportunityTriggerHandler {

    public static void afterUpdate(List<Opportunity> newOpp,Map<Id,Opportunity> oldMap)
    {
        set<id> accsIds=new Set<id>();

        for(Opportunity opp:newOpp)
        {
            Opportunity oldOpp=oldMap.get(opp.id);
            // Opportunity newOpp=Trigger.opp.id;
            if(oldOpp.stageName !='Closed Won' && opp.stageName == 'Closed Won' )
            {
                accsIds.add(opp.AccountId);
            }

        }

        List<Account> acclist =new List<Account>();
        List<Account> accountToUpdate=new List<Account>();

        acclist=[select id ,name,description from Account where id IN:accsIds];
        for(Account acc:acclist)
        {
            acc.description='its has closed won opp';
            accountToUpdate.add(acc);
        }
        update accountToUpdate;


    }


























	// public static void afterUpdate(List<Opportunity> newList,Map<Id, Opportunity> oldMap)
    //  {
    //     set<Id> accIds=new Set<Id> ();
         
    //     for(Opportunity Opp : newList)
    //     {
    //         Opportunity oldOpp =oldMap.get(opp.Id);
    //         if(oldOpp.stageName!='Closed Won' && opp.stageName=='Closed Won')
    //         {
    //             accIds.add(opp.AccountId);
    //         }
    //     }

    //     List<Account> accList=new List<Account>();

    //     for(Account a: [Select id,name,description from Account where id IN :accIds])
    //     {
    //         a.description='has closed won opp';
    //         accList.add(a);
    //     }

    //     update accList;
    //  }
}
