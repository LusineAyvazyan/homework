const cars = [
    {
        model: 'MERCEDES BENZ',
        year: 2020,
        owner: 0,
        service: 1,
    },
    {
        model: 'BMW',
        year: 2015,
        owner: 1,
        service: 1,
    },
    {
        model: 'AUDI',
        year: 2001,
        owner: 0,
        service: 0,
    },
    {
        model: 'LEXUS',
        year: 2000,
        owner: 2,
        service: 0,
    }
]
const owner = [
    {
        name: 'Armen',
        index: 0,
    },
    {
        name: 'Narek',
        index: 1,
    },
    {
        name: 'Hayk',
        index: 2,
    }
]
const service = [
    {
        serviceName: 'Mec Aniv',
        index: 0,
    },
    {
        serviceName: 'Poqr Aniv',
        index: 1,
    },
];

// Գտնել քանի մեքենա է սպասարկվում ամեն սերվիսում

const carsInService = cars.filter ((item) => {
  const serviceNameNew = service.filter ((element) => {
    if (item.service === element.index) {
        item.service = element.serviceName;
        }
    });
        return item;
});
console.log(carsInService);

// Գտնել Նարեկի բոլոր մեքենաները

const narekCars = cars.filter ((item) => {
    const newOwner = owner.filter ((element) => {
        if (item.owner === element.index) {
            item.owner = element.name;
            }
        });
            return item;
});
console.log(narekCars);

//Գտնել տաս տարեկանից մեծ մեքենաները

const carsNewYear = cars.filter ((item) => {
    if (item.year > 2010) {
        return item;
    }
 });
 console.log (carsNewYear);

//Փոխել բոլոր մեքենաների տարեթվերը մեկ ով

  const changeCarsYear = cars.map((item) => item.year += 1)
     console.log (changeCarsYear);

/*Ստեղծել ֆորմա որը կավելացնի մեքենա:
  Ֆորմայում գրենք , Մեքենայի անուն , տարեթիվ,
  և ընտրենք համապտասխան վարորդին
  և սերվիսը
  և սեղմենք ավելացնել կոճակը,
Կոճակը սեղմելուց մեքենան ավելանա people, ի մեջ*/

let newCar = [];
const carAdd = document.querySelector('.add');
const carModel = document.querySelector('#car');
const carOwner = document.querySelector('.Owner');
const carService = document.querySelector('.Service');
const carYear = document.querySelector('#year');
carAdd.addEventListener ('click', function () {
    newCar.push( {
        model: carModel.value,
        year: carYear.value,
        owner: carOwner.value,
        service: carService.value,

  }); 
  console.log(newCar)
});

