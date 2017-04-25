/**
 * @constructor
 * @this {Card}
 * @param {object} info
 * @property {object} Card.A - Point instance
 * @property {object} Card.B - Point instance
 * @property {object} Card.transport - Transport instance
 * @throws {TypeError}
 */
function Card(info) {
    if (
           hlp.gettype(info) !== 'object'
        || !info.hasOwnProperty('A')
        || !info.hasOwnProperty('B')
        || !(info.A instanceof Point)
        || !(info.B instanceof Point)
        || !info.hasOwnProperty('transport')
        || !(info.transport instanceof Transport)
    ) {
        throw new TypeError('Card constructor: Wrong param');
    }

    this.A = info.A;
    this.B = info.B;
    this.A.next = this.B;
    this.B.prev = this.A;
    this.transport = info.transport;
}

/**
 * @this {Card}
 * @return {String} - Card info
 */
Card.prototype.getDescription = function () {
    var tmp = [];
    tmp.push('take ' + this.transport.type.name, 'from ' + this.A.name, 'to ' + this.B.name);
    tmp.sort(function () {
        return .5 - Math.random();
    });
    tmp = tmp.join(' ');

    var additional = this.transport.additional;
    Object.keys(additional).forEach(function (add) {
        tmp += ' ' + additional[add].name + ' ' + additional[add].value + '.';
    });

    return tmp[0].toUpperCase() + tmp.substr(1);
};