// Fisher-Yates Algoritom

let cards = ['A',1,2,3,4,5,6,7,8,9,'J','K','Q'];
// cards.sort(() => Math.random()-0.5);

Shuffle(cards);

console.log(cards);

function Shuffle(array) {
    for( let i = cards.length-1; i > 0; i-- ) {
        let random = Math.floor(Math.random()*(i+1));
        [array[i], array[random]] = [array[random],array[i]];
    }
}