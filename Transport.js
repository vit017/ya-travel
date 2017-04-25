/**
 * @constructor
 * @this {Transport}
 */
function Transport() {
}

/**
 * @property {Object} type
 * @property {String} Transport.type.id - unique identifier of transport type
 * @property {String} Transport.type.name - name of transport type
 */
Transport.BUS = {id: 'bus', name: 'Bus'};
Transport.TRAIN = {id: 'train', name: 'Train'};
Transport.AIR = {id: 'air', name: 'Flight'};