import { LightningElement } from 'lwc';

export default class LifecycleDemo extends LightningElement {
    name = 'World';
    seconds = 0;
    timerId;
    firstRenderDone = false;

    constructor() {
        super();
        console.log('1. constructor');
    }

    connectedCallback() {
        console.log('2. connectedCallback');
        this.timerId = setInterval(() => {
            this.seconds++;
        }, 1000);
    }

    renderedCallback() {
        console.log('3. renderedCallback');
        if (this.firstRenderDone) {
            return;
        }
        this.firstRenderDone = true;
        const msg = this.template.querySelector('.msg');
        console.log('First render, element found: ' + msg.textContent);
    }

    disconnectedCallback() {
        console.log('4. disconnectedCallback');
        clearInterval(this.timerId);
    }

    errorCallback(error, stack) {
        console.log('Child error: ' + error.message);
    }

    handleClick() {
        this.name = 'Salesforce';
    }
}