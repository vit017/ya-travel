/**
 * @constructor
 * @this {Route}
 */
function Route() {
    this.cards = {};
}

/**
 * @param {Object[]|Object} cards - Add cards to route.
 */
Route.prototype.addCards = function () {
    var cards = hlp.toArray(arguments),
        that = this;

    cards.forEach(function (c) {
        that.cards[that.makeKey(c.A, c.B)] = c;
    });
};

/**
 * @param {object} A - Point instance (from).
 * @param {object} B - Point instance (to).
 * @return {object} Card.
 */
Route.prototype.getCard = function (A, B) {
    return this.cards[this.makeKey(A, B)];
};

/**
 * Function generates a unique key for Card
 * @param {object} A - Point instance (from).
 * @param {object} B - Point instance (to).
 * @return {string} key.
 */
Route.prototype.makeKey = function (A, B) {
    return A.id + '.' + B.id;
};

/**
 * @this {Route}
 * @return {string} info.
 */
Route.prototype.info = function () {
    var result = [];

    this.cards.forEach(function (card) {
        result.push(card.getDescription());
    });

    return result.join("\n");
};

/**
 * @this {Route}
 */
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