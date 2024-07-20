class Calculator {
    constructor() {
        this.displayValue = '';
    }

    datosOP(value) {
        this.displayValue += value;
        this.updateDisplay();
    }

    calculate() {
        try {
            let result = eval(this.displayValue);
            this.displayValue = result.toString();
            this.updateDisplay();
        } catch (error) {
            this.displayValue = 'Error';
            this.updateDisplay();
        }
    }

    clearDisplay() {
        this.displayValue = '';
        this.updateDisplay();
    }

    updateDisplay() {
        document.getElementById('display').value = this.displayValue;
    }
}

const cal = new Calculator();