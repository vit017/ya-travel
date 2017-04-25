var d = document;
function cl() {
    console.log.apply(console, arguments);
}

var hlp = (function () {
    var gettype = function (mix) {
        return Object.prototype.toString.call(mix).slice(8, -1).toLowerCase();
    };

    var toArray = function (list) {
        var ar = (list.length === 1 ? [list[0]] : Array.apply(null, list));
        return [].concat.apply([], ar);
    };

    return {
        gettype: gettype,
        toArray: toArray
    }
}());

var Card = function (info) {
    this.A = info.A;
    this.B = info.B;
    this.A.next = this.B;
    this.B.prev = this.A;
    this.transport = info.transport;
};

Card.prototype.getDescription = function() {
    var tmp = [];
    tmp.push('take ' + this.transport.type.name, 'from ' + this.A.name, 'to '+ this.B.name);
    tmp.sort(function() {
        return .5 - Math.random();
    });
    tmp = tmp.join(' ');

    var additional = this.transport.additional;
    Object.keys(additional).forEach(function (add) {
        tmp += ' ' + additional[add].name + ' ' + additional[add].value + '.';
    });

    return tmp[0].toUpperCase()+tmp.substr(1);
};

var Route = function () {
    this.cards = {};
};

var Point = function (info) {
    this.id = info.id;
    this.name = info.name;
};

Route.prototype.addCards = function () {
    var cards = hlp.toArray(arguments),
        that = this;

    cards.forEach(function (c) {
        that.cards[that.makeKey(c.A, c.B)] = c;
    });
};

Route.prototype.getCard = function (A, B) {
    return this.cards[this.makeKey(A, B)];
};

Route.prototype.makeKey = function (A, B) {
    return A.id + '.' + B.id;
};

Route.prototype.info = function () {
    var result = [];

    this.cards.forEach(function (card) {
        result.push(card.getDescription());
    });

    return result.join("\n");
};

Route.prototype.sort = function () {
    var
        i = 0,
        cardsKey = Object.keys(this.cards),
        point = this.cards[cardsKey[0]].B,
        sortCards = [],
        middle = [];

    while (point) {
        middle.unshift(point);
        point = point.prev;
    }

    point = middle[middle.length - 1];
    while (point.next) {
        middle.push(point.next);
        point = point.next
    }

    for (var l = middle.length; i < l - 1; i++) {
        sortCards.push(this.getCard(middle[i], middle[i + 1]));
    }

    this.cards = sortCards;
};

var Transport = function (info) {

};

Transport.BUS = {id: 'bus', name: 'Bus'};
Transport.TRAIN = {id: 'train', name: 'Train'};
Transport.AIR = {id: 'air', name: 'Flight'};


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
    transport: {
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 6'},
            baggage: {name: 'baggage 6', value: 'you don`t need baggage 6'}
        }
    }
});
var card2 = new Card({
    A: p2,
    B: p3,
    transport: {
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 22'},
            baggage: {name: 'baggage2', value: 'you don`t need baggage 2'}
        }
    }
});
var card7 = new Card({
    A: p3,
    B: p4,
    transport: {
        type: Transport.BUS,
        additional: {
            seats: {name: 'seat', value: 'seat 7'},
            baggage: {name: 'baggage 7', value: 'you don`t need baggage 7'}
        }
    }
});
var card1 = new Card({
    A: p4,
    B: p5,
    transport: {
        type: Transport.BUS,
        additional: {
            seats: {name: 'seat', value: 'seat 1'},
            baggage: {name: 'baggage 1', value: 'you don`t need baggage 1'}
        }
    }
});
var card10 = new Card({
    A: p5,
    B: p6,
    transport: {
        type: Transport.BUS,
        additional: {
            seats: {name: 'seat', value: 'seat 10'},
            baggage: {name: 'baggage 10', value: 'you don`t need baggage 10'}
        }
    }
});
var card3 = new Card({
    A: p6,
    B: p7,
    transport: {
        type: Transport.TRAIN,
        additional: {
            seats: {name: 'seat', value: 'seat 3'},
            baggage: {name: 'baggage 3', value: 'you don`t need baggage 3'}
        }
    }
});
var card11 = new Card({
    A: p7,
    B: p8,
    transport: {
        type: Transport.TRAIN,
        additional: {
            seats: {name: 'seat', value: 'seat 11'},
            baggage: {name: 'baggage 11', value: 'you don`t need baggage 11'}
        }
    }
});
var card8 = new Card({
    A: p8,
    B: p9,
    transport: {
        type: Transport.TRAIN,
        additional: {
            seats: {name: 'seat', value: 'seat 8'},
            baggage: {name: 'baggage 8', value: 'you don`t need baggage 8'}
        }
    }
});
var card4 = new Card({
    A: p9,
    B: p10,
    transport: {
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 4'},
            baggage: {name: 'baggage 4', value: 'you don`t need baggage 4'}
        }
    }
});
var card9 = new Card({
    A: p10,
    B: p11,
    transport: {
        type: Transport.AIR,
        additional: {
            seats: {name: 'seat', value: 'seat 10'},
            baggage: {name: 'baggage 10', value: 'you don`t need baggage 10'}
        }
    }
});
var card5 = new Card({
    A: p11,
    B: p12,
    transport: {
        type: Transport.BUS,
        additional: {
            seats: {name: 'seat', value: 'seat 5'},
            baggage: {name: 'baggage 5', value: 'you don`t need baggage 5'}
        }
    }
});

var r1 = new Route();

r1.addCards(card1, card5, card6, card7, card9, card4, card10, card11, card2, card3, card8);

r1.sort();

cl(r1.info());




















