var moment = require('moment');
moment.locale('es');

console.log('naci ' + moment('11/08/1982', 'DD/MM/YYYY').fromNow());