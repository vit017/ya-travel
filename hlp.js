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