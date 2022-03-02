const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) { 
        console.log(`Wrapped ${gifts[i]} and added a bow`);
        debugger; 
            }
    return gifts;
    
}

wrapGifts(gifts);

const namesArray = ['janhavi', 'vedant', 'dhvani'];
const eventName = "surprise";

function writeCards(namesArray, eventName) {
    for (i = 0; i < namesArray.length; i++) {
     console.log( `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift`);
    };
    debugger;
}

writeCards(namesArray, eventName);


function countDown() {
    let i=10;
    while (i >= 0) {
        console.log(i);
        i--;
        }
}

countDown();