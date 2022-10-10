let flights = [
    { id: 00, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 01, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 02, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 03, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 04, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 05, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 06, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 07, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 08, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 09, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

let idCounter = 10;
let userResponse;

let getName = () => {
    const name = prompt('Por favor, introduzca su nombre.');
    if (name === '') {
        return getName();
    }
    alert('¡' + name + ', le damos la bienvenida!');
};

let showFlights = () => {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === false) {
            console.log(
                'El vuelo con origen: ' +
                    flights[i].from +
                    ' y destino: ' +
                    flights[i].to +
                    ', tiene un coste de ' +
                    flights[i].cost +
                    '€ y no realiza ninguna escala.'
            );
        } else {
            console.log(
                'El vuelo con origen: ' +
                    flights[i].from +
                    ' y destino: ' +
                    flights[i].to +
                    ', tiene un coste de ' +
                    flights[i].cost +
                    '€ y realiza escala.'
            );
        }
    }
};

let averageCost = () => {
    let totalCost = 0;
    for (let i = 0; i < flights.length; i++) {
        totalCost = totalCost + flights[i].cost;
    }
    let result = totalCost / flights.length;
    console.log('El coste medio de los vuelos es de: ' + result + '€.');
};

let showFlightsScale = () => {
    let flightsScale = 0;
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            flightsScale = flightsScale + flights[i].scale;
        }
    }
    console.log('Hay ' + flightsScale + ' vuelos que efectúan escalas:');

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            console.log(
                'El vuelo con origen: ' +
                    flights[i].from +
                    ' y destino: ' +
                    flights[i].to +
                    ', tiene un coste de ' +
                    flights[i].cost +
                    '€ y efectúa escala.'
            );
        }
    }
};

let showLastFive = () => {
    console.log('Los últimos 5 vuelos del día son:');
    for (let i = 0; i < flights.length; i++) {
        if (i > flights.length - 6) {
            if (flights[i].scale === false) {
                console.log(
                    'El vuelo con origen: ' +
                        flights[i].from +
                        ' y destino: ' +
                        flights[i].to +
                        ', tiene un coste de ' +
                        flights[i].cost +
                        '€ y no realiza ninguna escala.'
                );
            } else {
                console.log(
                    'El vuelo con origen: ' +
                        flights[i].from +
                        ' y destino: ' +
                        flights[i].to +
                        ', tiene un coste de ' +
                        flights[i].cost +
                        '€ y realiza escala.'
                );
            }
        }
    }
};

let askForRole = () => {
    let role = prompt(
        '¿Cuál es su perfil? Escriba «user» en caso de ser un usuario o «admin» si es administrador.'
    );
    if (role === null) {
        askForRole();
    } else if (
        role.toLowerCase() !== 'user' &&
        role.toLowerCase() !== 'admin'
    ) {
        askForRole();
    } else {
        if (role === 'user') {
            getPrice();
        }
        if (role === 'admin') {
            adminAction();
        }
    }
};

let askForAdminAction = () => {
    let action = prompt(
        '¿Qué desea hacer ahora? Escriba «crear» para crear más vuelos o «eliminar» para eliminar vuelos existentes.'
    );
    if (action === null) {
        askForAdminAction();
    } else if (
        action.toLowerCase() !== 'crear' &&
        action.toLowerCase() !== 'eliminar'
    ) {
        alert('Por favor, escriba una acción válida.');
        askForAdminAction();
    } else {
        return action.toLowerCase();
    }
};

let adminAction = () => {
    let action = askForAdminAction();
    do {
        if (action === 'crear') {
            if (flights.length < 16) {
                let newFlight = {};

                newFlight.id = idCounter;
                idCounter = idCounter + 1;
                newFlight.to = prompt('Inserte destino.');
                newFlight.from = prompt('Inserte origen.');
                newFlight.cost = +prompt('Inserte coste.');

                let scaleResponse = prompt(
                    '¿Tiene escala? Escriba «si» en el caso de tenerla.'
                );
                if (scaleResponse.toLowerCase() === 'si') {
                    newFlight.scale = true;
                } else {
                    newFlight.scale = false;
                }

                flights.push(newFlight);
                showFlightsList();
            } else {
                alert(
                    'Error. Ha alcanzado el número máximo de vuelos añadidos. Elimine un vuelo existente para añadir otro.'
                );
            }
        }

        if (action === 'eliminar') {
            showFlightsList();
            let idToDelete = +prompt(
                'Inserte el «id» del vuelo que desea eliminar'
            );
            flights = flights.filter((flight) => flight.id !== idToDelete);
            showFlightsList();
        }
        action = prompt(
            'Escriba lo que desea hacer ahora «crear», «eliminar» o «salir»'
        );
    } while (
        action.toLowerCase() === 'crear' ||
        action.toLowerCase() === 'eliminar'
    );
    alert('¡Hasta pronto!');
};

let showFlightsList = () => {
    console.log('Lista de vuelos existentes:');
    flights.forEach((flight) =>
        console.log(
            `id ${flight.id} to: ${flight.to} from: ${flight.from} cost: ${flight.cost} scale: ${flight.scale}`
        )
    );
};

let getPrice = () => {
    userResponse = prompt(
        'Inserte un precio máximo, le mostraremos las mejores ofertas.'
    );
    if (isNaN(Number(userResponse)) || userResponse === '') {
        alert(
            'Lo que has introducido no es un número. Por favor introduce sólo números.'
        );
        return getPrice();
    }
    showBestPrices();
};

let showBestPrices = () => {
    let bestPrices;
    bestPrices = flights.filter(
        (flight) => flight.cost <= Number(userResponse)
    );
    console.log(
        'Las siguientes ofertas se adaptan a tu presupuesto de ' +
            userResponse +
            '€'
    );
    for (let bestPrice of bestPrices) {
        if (bestPrice.scale === false) {
            console.log(
                'El vuelo con origen: ' +
                    bestPrice.from +
                    ' y destino: ' +
                    bestPrice.to +
                    ', tiene un coste de ' +
                    bestPrice.cost +
                    '€ y no realiza ninguna escala.'
            );
        } else {
            console.log(
                'El vuelo con origen: ' +
                    bestPrice.from +
                    ' y destino: ' +
                    bestPrice.to +
                    ', tiene un coste de ' +
                    bestPrice.cost +
                    '€ y realiza escala.'
            );
        }
    }
};

getName();
showFlights();
alert('A continuación, verá el coste medio de los vuelos.');
averageCost();
alert('También podrá ver los vuelos que efectúan escalas.');
showFlightsScale();
alert('Por último, verá los últimos 5 vuelos del día.');
showLastFive();

askForRole();
