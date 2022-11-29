class Numero {
    constructor(number, type) {
        this.number = number;
        this.type = type;
        this.html = document.createElement("div");
        this.html.classList.add("zone");
        
    }

    get getHTML() {
        this.html.textContent = this.number;
        if(this.type == "boule") {
           this.html.classList.add("boule"); 
        } else {
            this.html.classList.add("etoile"); 

        }
        return this.html;
    }

    setVisible() {
        this.html.classList.add("show"); 

    }

    static numbersRandomGenerator(maxNumber, elementNumber) {
        const arrayNumbers = [];
        while (arrayNumbers.length < elementNumber) {
            let newNumber = Math.ceil(Math.random() * maxNumber);
            (arrayNumbers.indexOf(newNumber) == -1) ? arrayNumbers.push(newNumber) : null;
        }
        return arrayNumbers;
    }
}