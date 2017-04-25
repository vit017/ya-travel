var p4 = new Point({id: 'v', 'name': 'Place 4'});
var p5 = new Point({id: 'w', 'name': 'Place 5'});
var p2 = new Point({id: 'd', 'name': 'Place 2'});
var p7 = new Point({id: 'u', 'name': 'Place 7'});
var p1 = new Point({id: 'b', 'name': 'Place 1'});
var p6 = new Point({id: 't', 'name': 'Place 6'});
var p10 = new Point({id: 'o', 'name': 'Place 10'});
var p8 = new Point({id: 'y', 'name': 'Place 8'});
var p12 = new Point({id: 'a', 'name': 'Place 12'});
var p9 = new Point({id: 'i', 'name': 'Place 9'});
var p11 = new Point({id: 'p', 'name': 'Place 11'});
var p3 = new Point({id: 'q', 'name': 'Place 3'});


var card6 = new Card({
    A: p1,
    B: p2,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card2 = new Card({
    A: p2,
    B: p3,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card7 = new Card({
    A: p3,
    B: p4,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card1 = new Card({
    A: p4,
    B: p5,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card10 = new Card({
    A: p5,
    B: p6,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card3 = new Card({
    A: p6,
    B: p7,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card11 = new Card({
    A: p7,
    B: p8,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card8 = new Card({
    A: p8,
    B: p9,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card4 = new Card({
    A: p9,
    B: p10,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card9 = new Card({
    A: p10,
    B: p11,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});
var card5 = new Card({
    A: p11,
    B: p12,
    transport: new Transport({
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    })
});

var r1 = new Route();

r1.addCards(card1, card5, card6, card7, card9, card4, card10, card11, card2, card3, card8);

r1.sort();

console.log(r1.info());



















