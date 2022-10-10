calculadora(prompt(), prompt());

function calculadora(x, y) {
    let resultados = [];
    //Realizar Raiz cuadrada si solo introducimos un dato numerico
    if (x == null || y == null) {
        if (y == null) {
            resultados.push(Math.sqrt(x).toFixed(3));
            console.log('La raiz cuadrada de ' + x + ' es: ' + resultados[0]);
        } else if (x == null) {
            resultados.push(Math.sqrt(y).toFixed(3));
            console.log('La raiz cuadrada de ' + y + ' es: ' + resultados[0]);
        }
    }
    //Si se introducen dos datos Numericos, Dar la suma resta multiplicacion y division
    else if (!isNaN(x) && !isNaN(y)) {
        y = Number(y);
        x = Number(x);
        let resultados = [];
        resultados.push(x + y, x - y, x * y, (x / y).toFixed(3));
        console.log('Suma: ' + resultados[0]);
        console.log('Resta: ' + resultados[1]);
        console.log('Multiplicacion: ' + resultados[2]);
        console.log('Division: ' + resultados[3]);
    }
    //Si se introduce un caracter que no es un numero, mostrar una alerta.
    else {
        console.log('Introduce datos numericos.');
    }
}
