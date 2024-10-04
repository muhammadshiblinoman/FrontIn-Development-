//// JavaScript Objects
//// Object Literace 
const newSymb = Symbol('Key1');

const mobileModel = {
    /// key: value,
    brand: 'Samsang',
    model: 'S24 Ultra',
    processor: 'Sanpdragon gen 3',
    camera: ['200MP', '48MP', '12MP'],
    hasZoomCamera: true,
    'selfie camera MP': 12,
    [newSymb]: 'MyKey1',
    brandMobile: function() {
        return `Mobile Brand is ${this.brand} and model is ${this.model}`;
    },
    battray: {
        maH: 5000,
    },
};

// Object.freeze(mobileModel); // No change element

mobileModel['model'] = 'S25'; //mobileModel.model = 'S25 Ultra';

console.log(mobileModel);
console.log(mobileModel.hasZoomCamera);
console.log(mobileModel['selfie camera MP']);
console.log(mobileModel[newSymb]);
console.log(mobileModel.hasOwnProperty('camera')); // kono property object ar vitor ase kina check korar jonno use kora hy
console.log(Object.keys(mobileModel));
console.log(Object.values(mobileModel));
console.log(mobileModel.brandMobile());

////// Adding Multipul object in a single object
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};
const obj2 = {
    d: 1,
    e: 2,
    f: 3,
};
const obj3 = {
    x: 1,
    y: 2,
    z: 3,
};
// const objFinal = Object.assign({}, obj1, obj2, obj3);

const objFinal = { ...obj1, ...obj2, ...obj3}; // morden practics
console.log(objFinal);
console.log(mobileModel.battray.maH);




///// Constractor Object in JavaScript

function Person( first , last) {
    (this.fistName = first),
    (this.lastName = last);
}

const person1 = new Person('Shibli', 'Noman');
const person2 = new Person('Muhammad', 'Shibli')
console.log(person1.fistName + " " + person1.lastName);
console.log(person2.fistName + " " + person2.lastName);














