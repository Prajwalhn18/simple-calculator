class Calculator{

 constructor(prevOpText,curOpText){
     this.prevOpText = prevOpText;
     this.curOpText = curOpText;
 }

 clear(){
     this.previousOperand = '';
     this.currentOperand = '';
     this.operations = undefined;

 }
 delete(){

 }

 appendNumber(number){
    this.currentOperand = (this.currentOperand ?? '') + number;
 }

 chooseOperation(operations){

 }

 compute(){

 }

 updateDisplay(){
        this.curOpText.innerText = this.currentOperand;
 }

}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearAllButton = document.querySelector('[data-clear]');
const prevOpText = document.querySelector('[data-prev-op]');
const curOpText = document.querySelector('[data-cur-op]');

const calculator = new Calculator(prevOpText,curOpText);

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

