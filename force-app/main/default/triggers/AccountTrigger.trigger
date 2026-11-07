trigger AccountTrigger on Account (after insert,after update) {


    if(trigger.isAfter && trigger.isInsert)
    {
        AccountTriggerHandler.afterInsert(Trigger.new);
    }


}