import { LightningElement } from 'lwc';

export default class ChildToParentCommunicationWithData extends LightningElement {
    endValue=5;
    msg='i am from child msg';
        handleClick(){
        const evt = new CustomEvent('increase',{
            detail:{endValue:this.endValue,msg:this.msg
            }
        });

        this.dispatchEvent(evt);

        }

    

}