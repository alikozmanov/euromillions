
window.addEventListener('load', () => {
    Numero.numbersRandomGenerator(50, 5).concat(Numero.numbersRandomGenerator(12, 2)).forEach((uniqueNumber, index) => {


        const numberToAdd = document.createElement("div");

        if(index < 5) {
            const numeroEuro = new Numero(uniqueNumber, "boule");

            document.getElementById("resultat").appendChild(numeroEuro.getHTML);
         
            setTimeout(() => {
                numeroEuro.setVisible(); }, 1000 * index + 500)
            
        } else {
            const numeroEuro = new Numero(uniqueNumber, "etoile");
            document.getElementById("resultat").appendChild(numeroEuro.getHTML);
         
            setTimeout(() => {
                numeroEuro.setVisible(); }, 1000 * index + 500)
            
        }

  
    
    })
});

