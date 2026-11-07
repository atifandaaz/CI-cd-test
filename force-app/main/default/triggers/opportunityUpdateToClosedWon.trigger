trigger opportunityUpdateToClosedWon on Opportunity (before insert, after update) {

    if(Trigger.isAfter && Trigger.isUpdate) {

       OpportunityTriggerHandler.afterUpdate(Trigger.new, Trigger.oldMap);

        
        // if(!oppsToUpdate.isEmpty()) {
        //     // Perform any additional logic here, such as sending notifications or updating related records
        //     System.debug('Opportunities updated to Closed Won: ' + oppsToUpdate);
        // }
    }


}