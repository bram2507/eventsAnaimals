class Animals {

    sound = '';

    constructor(sound){
        this.sound = sound;
    }
    getSound(){
        return this.sound;
    }

}

class Cat extends Animals{
    type ='Cat'
    constructor() {
        super('Miau Miau');
    }
}

class Dog extends Animals{
    type ='Dog'
    constructor() {
        super('Gua Gua');
    }
}

class Horse extends Animals{
    type ='horse'
    constructor() {
        super('Brrffff brfff');
    }
}

let animalSet = new Array();

const DOG = 'Dog';
const CAT = 'Cat';
const HORSE = 'Horse';

const btns =[
    {text: 'dog', class: 'btn-default' },
    {text: 'cat', class: 'btn-default'},
    {text: 'horse', class: 'btn-default'},
    {text: 'getDogs', class: 'btn-default'},
    {text: 'getCats', class: 'btn-default'},
    {text: 'getHorses', class: 'btn-default'},
    {text: 'getAll', class: 'btn-default'},]

const animals = {'dog':0 , 'cat':1, 'horse':2};

const btnElement = 'button';

const app = document.querySelector('#app');

app.style.setProperty('display', 'flex');
app.style.setProperty('justify-content', 'space-around');
app.style.setProperty('align-items', 'start');

const animalsDiv = document.createElement('div');
animalsDiv.style.setProperty('display', 'flex');
animalsDiv.style.setProperty('justify-content', 'start');
animalsDiv.style.setProperty('flex-direction', 'column');
animalsDiv.style.setProperty('padding', '2rem');

app.insertAdjacentElement('afterend',animalsDiv);

btns.map(((el,index) => {
    const btn = document.createElement('button');
    btn.innerText = el.text;
    btn.classList.add(el.class);
    btn.setAttribute('id', index.toString());
    btn.style.setProperty('display', 'flex');
    app.appendChild(btn.cloneNode(true));
}));



app.addEventListener('click', (event) => {

    createDog(event);

    createCat(event);

    createHorse(event);

    getDogs(event);

    getCats(event);

    getHorses(event);

    getAll(event);

});




function createDog(event){
    if (event.target.nodeName === 'BUTTON' && event.target.innerText === 'dog') {
        console.log(event.target.id, event.target.innerText);
        const dog = new Dog();
        const div = createDivCard(dog,event);
        animalSet.push(dog);
        animalsDiv.appendChild(div);
    }
}

function createCat(event){
    if (event.target.nodeName === 'BUTTON' && event.target.innerText === 'cat') {
        console.log(event.target.id, event.target.innerText);
        const cat = new Cat();
        const div = createDivCard(cat,event);
        animalSet.push(cat);
        animalsDiv.appendChild(div);
    }
}

function createHorse(event){
    if (event.target.nodeName === 'BUTTON' && event.target.innerText === 'horse'){
        const horse = new Horse();
        const div = createDivCard(horse,event);
        animalSet.push(horse);
        animalsDiv.appendChild(div);
    }
}

function getAll(event){
    if (event.target.nodeName === 'BUTTON' && event.target.innerText === 'getAll') {
       const obj= getAnmialsByType();
       try {
           console.log('Dog ' + obj['Dog'].length, 'Cat ' + obj['Cat'].length, 'Horse ' + obj['Horse'].length);
       }catch(err){
           console.error(err);
       }
    }
}

function getDogs(event){
    if (event.target.nodeName === 'BUTTON' && event.target.innerText === 'getDogs') {
        const obj= getAnmialsByType();
        console.log('Dog ' + obj['Dog'].length, );
    }
}

function getCats(event){
    if (event.target.nodeName === 'BUTTON' && event.target.innerText === 'getCats') {
        const obj= getAnmialsByType();
        console.log('Cat ' + obj['Cat'].length, );
    }
}

function getHorses(event){
    if (event.target.nodeName === 'BUTTON' && event.target.innerText === 'getHorses') {
        const obj= getAnmialsByType();
        console.log('Horse ' + obj['Horse'].length, );
    }
}

function createDivCard(animal,event){
    const div = document.createElement('div');
    div.setAttribute('id', event.target.id);
    div.style.setProperty('display', 'flex');
    div.style.setProperty('justify-content', 'start');
    div.style.setProperty('flex-direction', 'column');
    div.style.setProperty('width', '10em');
    div.style.setProperty('height', '6em');
    div.style.setProperty('border', '1px solid black');
    div.style.setProperty('border-radius', '5px');
    div.style.setProperty('padding', '1em');
    div.style.setProperty('margin-bottom', '.5em');
    div.innerHTML += `<h3>${event.target.innerText}</h3>`;
    div.innerHTML += `<p>${animal.getSound()}</p>`;

    return div;
}

function getAnmialsByType(){

    let dog = new Dog();
    let cat = new Cat();
    let horse = new Horse();

    const animalsByType = Object.groupBy(animalSet,(value) => {
        if (value instanceof Dog){
            return 'Dog';
        }

        if (value instanceof Cat){
            return 'Cat';
        }

        if (value instanceof Horse){
            return 'Horse';
        }

    });
    return animalsByType;


}