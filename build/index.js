'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var cool = require('cool-ascii-faces');
var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 5000;

var _require = require('pg'),
    Pool = _require.Pool;

var pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

express().use(express.static(path.join(__dirname, 'public'))).set('views', path.join(__dirname, 'views')).set('view engine', 'ejs').get('/', function (req, res) {
  return res.render('pages/index');
}).get('/db', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var client, result, results;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return pool.connect();

          case 3:
            client = _context.sent;
            _context.next = 6;
            return client.query('SELECT * FROM test_table');

          case 6:
            result = _context.sent;
            results = { 'results': result ? result.rows : null };

            res.render('pages/db', results);
            client.release();
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            res.send(_context.t0);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).get('/cool', function (rec, res) {
  return res.send(cool());
}).get('/times', function (req, res) {
  return res.send(showTimes());
}).listen(PORT, function () {
  return console.log('Listening on ' + PORT);
});

showTimes = function showTimes() {
  var result = '';
  var times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
};
//# sourceMappingURL=index.js.map