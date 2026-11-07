import { LightningElement } from 'lwc';
import searchBoxTemplate from './lwcHooks.html';


export default class LwcHooks extends LightningElement {
     searchText = '';

    constructorCount = 0;
    connectedCount = 0;
    renderCount = 0;
    renderedCount = 0;
    disconnectedCount = 0;
    errorCount = 0;

    constructor() {
        super();
        this.constructorCount++;
        console.log('constructor before: ' + this.constructorCount);
        
        // console.log('constructor after: ' + this.constructorCount);
    }

    connectedCallback() {
          this.connectedCount++;
        console.log('connectedCallback before: ' + this.connectedCount);
      
        // console.log('connectedCallback after: ' + this.connectedCount);
    }

    render() {
         this.renderCount++;
        console.log('render before: ' + this.renderCount);
       
        // console.log('render after: ' + this.renderCount);
        // return searchBoxTemplate;
    }

    renderedCallback() {
        this.renderedCount++;

        console.log('renderedCallback before: ' + this.renderedCount);
        // console.log('renderedCallback after: ' + this.renderedCount);
    }

    disconnectedCallback() {
        this.disconnectedCount++;

        console.log('disconnectedCallback before: ' + this.disconnectedCount);
        // console.log('disconnectedCallback after: ' + this.disconnectedCount);
    }

    errorCallback(error, stack) {
        this.errorCount++;

        console.log('errorCallback before: ' + this.errorCount);
        // console.log('errorCallback after: ' + this.errorCount, error, stack);
    }

    handleChange(event) {
        this.searchText = event.target.value;
    }
}