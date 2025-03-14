const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

class Transport {
    constructor(type,price,brand,image,id) {
        this.type=type;
        this.price=price;
        this.brand=brand;
        this.image=image;
        this.id=id;
    }
    getInfo() {
        return {
        type: this.type,
        price: this.price,
        brand: this.brand,
        image: this.image,
        id: this.id
        }
        
    }
    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(type,price,brand,image,id,doors) {
        super(type,price,brand,image,id);
        this.doors=doors;
    }
    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(type,price,brand,image,id,maxSpeed) {
        super(type,price,brand,image,id);
        this.maxSpeed=maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }
}

let allTransport=data.map(function(item) {
    if (item.type==='car') {
        return new Car(item.type, item.price, item.brand, item.image, item.id, item.doors)
    } else {
        return new Bike(item.type, item.price, item.brand, item.image, item.id, item.maxSpeed)
    }
})


let cardsContainer=document.getElementById('products');
const allTransportBtn=document.getElementById('allTransportBtn');
const carsBtn=document.getElementById('carBtn');
const bikeBtn=document.getElementById('bikeBtn');
function clearCards() {
    cardsContainer.innerHTML='';
};

function createCard (item) {
    let card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <img src="${item.image}" alt="">
    <h3>${item.brand}</h3>
    ${item instanceof Car ? `<p>Amount of doors: ${item.getDoorsCount()}</p>` : ''}
    ${item instanceof Bike ? `<p>Max speed: ${item.getMaxSpeed()} km/h</p>` : ''}
    <p>Price: ${item.getPrice()}</p>
    `;
    cardsContainer.appendChild(card);
};

function displayAll (item) {
    clearCards();
    allTransport.forEach(createCard)
}

function displayCars (item) {
    clearCards();
    allTransport.forEach(function(item) {
        if (item instanceof Car) {
            createCard(item)
        }
    })
    }


    function displayBike() {
        clearCards();
        allTransport.forEach(function(item) {
            if (item instanceof Bike) {
                createCard(item);
            }
        });
    }

displayAll(); 


allTransportBtn.addEventListener('click', displayAll);
carsBtn.addEventListener('click', displayCars);
bikeBtn.addEventListener('click', displayBike);
