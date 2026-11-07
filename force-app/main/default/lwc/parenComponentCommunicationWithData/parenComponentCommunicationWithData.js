import { LightningElement } from 'lwc';

export default class ParenComponentCommunicationWithData extends LightningElement {
    myvalue=0;
    count=1;
    msg0='i am default value';
    handleCustomEvent(event)
    {
        this.myvalue=event.detail.endValue;
       this.msg0=event.detail.msg;
        if(this.count<this.myvalue)
        {
            this.count=this.count+1;
        }

    }
}