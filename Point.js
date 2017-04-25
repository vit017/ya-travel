/**
 * @constructor
 * @this  {Point}
 * @param {object} info
 * @property {String} Point.id - unique identifier of point
 * @property {String} Point.name - name of point
 */
function Point(info) {
    this.id = info.id;
    this.name = info.name;
}