// Facciamo attenzione a non dimenticare tutte le differenze
//  implementative che il ciclo while ci impone, in particolare
//   alla variabile di indice.
// Data una lista della spesa, stampare sulla pagina 
// (anche brutalmente, basta che si vedano) gli elementi della 
// lista individualmente con un ciclo while.


//creiamo l'array
const expenseList = [ 
    " Acqua", 
    " Pane",
    " Pasta",
    " Latte",
    " Coca-cola",
    " Affettati"
    ]
//controlliamo che faccia il consol log dell'array
    console.log(expenseList);
    //colleghiamo la variabile spesa con l'html lista-spesa
    const spesa = document.querySelector(".lista-spesa");
    //dichiariamo la variabile i ci servirà per i ciclo while
    let i = 0;
    //ciclo while i minore della lunghezza dell'array
    while (i < expenseList.length){

        //console log degli elementi dell'array
        console.log(expenseList[i]);

        //incremento con ++
         i++

         //stampo con inner nell'html gli elemtni dell'array
        spesa.innerHTML = expenseList

    }