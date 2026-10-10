import { LightningElement } from 'lwc';

export default class ChildComponentComunication extends LightningElement {

    handleClick() {
        this.dispatchEvent(new CustomEvent('increasecount'));


}
}