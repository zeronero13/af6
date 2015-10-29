var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'birthday',
    connection: 'disk',
    attributes: {
        nev: 'string',
        datum: 'date',
        /*mikor: {
            type: 'date',
            defaultsTo: function () { return new Date(); }
        }*/
    }
});