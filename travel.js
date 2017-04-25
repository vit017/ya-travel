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
    this.id = info.id;
    this.routeIndex = 0;
    this.transport = {};
    this.route = info.route;
    this.A = info.A;
    this.B = info.B;
    info.A.next = info.B;
    info.B.prev = info.A;
};

var Route = function () {
    //this.points = hlp.toArray(arguments);
};

var Point = function (id) {
    this.id = id;
};

Route.prototype.addCards = function () {
    this.cards = hlp.toArray(arguments);
};

Route.prototype.sort = function () {
    var
        card = this.cards[0].A,
        middle = [];

    while (card.prev) {
        middle.unshift(card.prev);
        card = card.prev;
    }
    card = middle[middle.length-1];
    while (card.next) {
        middle.push(card.next);
        card = card.next
    }
    cl(middle)
};

var Transport = function () {

};


var p4 = new Point('v');
var p5 = new Point('w');
var p2 = new Point('d');
var p7 = new Point('u');
var p1 = new Point('b');
var p6 = new Point('t');
var p10 = new Point('o');
var p8 = new Point('y');
var p12 = new Point('a');
var p9 = new Point('i');
var p11 = new Point('p');
var p3 = new Point('q');


var card6 = new Card({A: p1, B: p2});
var card2 = new Card({A: p2, B: p3});
var card7 = new Card({A: p3, B: p4});
var card1 = new Card({A: p4, B: p5});
var card10 = new Card({A: p5, B: p6});
var card3 = new Card({A: p6, B: p7});
var card11 = new Card({A: p7, B: p8});
var card8 = new Card({A: p8, B: p9});
var card4 = new Card({A: p9, B: p10});
var card9 = new Card({A: p10, B: p11});
var card5 = new Card({A: p11, B: p12});

//var routePoints = ['street5', 'strret44', 'srr33', 'aa11', 'gg4', '555', '123'];

var r1 = new Route();

r1.addCards(card1,card5, card6, card7,card9,card4,  card10, card11, card2, card3, card8);

r1.sort();




















