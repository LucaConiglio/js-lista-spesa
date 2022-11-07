// Facciamo attenzione a non dimenticare tutte le differenze
//  implementative che il ciclo while ci impone, in particolare
//   alla variabile di indice.
// Data una lista della spesa, stampare sulla pagina 
// (anche brutalmente, basta che si vedano) gli elementi della 
// lista individualmente con un ciclo while.


const expenseList = [ 
    "Acqua", 
    " Pane",
    " Pasta",
    " Latte",
    " Coca-cola",
    " Affettati"
    ]

    console.log(expenseList);

    const spesa = document.querySelector(".lista-spesa");

    let i = 0;

    while (i < expenseList.length){
        console.log(expenseList[i]);
         i++
        spesa.innerHTML = expenseList

    }