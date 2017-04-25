/**
 * @constructor
 * @this  {Point}
 * @param {object} info
 * @property {String} Point.id - unique identifier of point
 * @property {String} Point.name - name of point
 * @throws {TypeError}
 */
function Point(info) {
    if (
            hlp.gettype(info) !== 'object'
        || !info.hasOwnProperty('id')
    ) {
        throw new TypeError('Point constructor: Wrong param');
    }

    this.id = info.id;
    this.name = info.name;
}