var d = document;
function cl() {
    console.log.apply(console, arguments);
}

var hlp = (function() {
    var gettype = function (mix) {
        return Object.prototype.toString.call(mix).slice(8, -1).toLowerCase();
    };

    var toArray = function (list) {
        return (list.length === 1 ? [list[0]] : Array.apply(null, list));
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
};

var Route = function () {
    var args = hlp.toArray(arguments);
    args = [].concat.apply([], args);
    this.points = args;
};

Route.prototype.addCards = function() {
    var args = hlp.toArray(arguments);
    args = [].concat.apply([], args);

    this.cards = args;
};

Route.prototype.sort = function() {
    var route = this,
        result = [],
        ind = 0;

    this.cards.forEach(function(card) {
        ind = route.points.indexOf(card.A);
        if (-1 !== ind) {
            result[ind] = card;
        }
    });

    return result;
};

var Transport = function () {

};

var card = new Card({A: 'strret44', B: 'srr33'});
var card2 = new Card({A: 'street5', B: 'strret44'});
var card3 = new Card({A: '555', B: '123'});
var card4 = new Card({A: 'srr33', B: 'aa11'});
var card5 = new Card({A: 'aa11', B: 'gg4'});
var card6 = new Card({A: 'gg4', B: '555'});

var routePoints = ['street5', 'strret44', 'srr33', 'aa11', 'gg4', '555', '123'];

var r1 = new Route(routePoints);

r1.addCards(card, card2, card3, card4, card5, card6);

r1.sort();




















