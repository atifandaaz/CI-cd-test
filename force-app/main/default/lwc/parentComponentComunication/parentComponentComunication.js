import { LightningElement } from 'lwc';

export default class ParentComponentComunication extends LightningElement {

    count = 0;
    handleIncreaseCount() {
        this.count= this.count + 1;
    }   
}