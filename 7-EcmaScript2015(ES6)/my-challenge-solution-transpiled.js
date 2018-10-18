'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Place = function () {
  function Place(name, buildYear) {
    _classCallCheck(this, Place);

    this.name = name;
    this.buildYear = buildYear;
  }

  _createClass(Place, [{
    key: 'calcAge',
    value: function calcAge() {
      return new Date().getFullYear() - this.buildYear;
    }
  }]);

  return Place;
}();

var Park = function (_Place) {
  _inherits(Park, _Place);

  function Park(name, buildYear, trees, area) {
    _classCallCheck(this, Park);

    var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

    _this.trees = trees;
    _this.area = area; // km2
    return _this;
  }

  _createClass(Park, [{
    key: 'treeDensity',
    value: function treeDensity() {
      var density = (this.trees / this.area).toFixed(2);
      console.log(this.name + ' has a tree densisty of ' + density + ' trees per square km.');
    }
  }]);

  return Park;
}(Place);

var Street = function (_Place2) {
  _inherits(Street, _Place2);

  function Street(name, buildYear, length) {
    var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

    _classCallCheck(this, Street);

    var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

    _this2.length = length;
    _this2.size = size;
    return _this2;
  }

  _createClass(Street, [{
    key: 'classifyStreet',
    value: function classifyStreet() {
      var classification = new Map();
      classification.set(1, 'tiny');
      classification.set(2, 'small');
      classification.set(3, 'normal');
      classification.set(4, 'big');
      classification.set(5, 'huge');
      console.log(this.name + ', built in ' + this.buildYear + ' is a ' + classification.get(this.size) + ' street.');
    }
  }]);

  return Street;
}(Place);

var places = {
  parks: [],
  streets: []
};

places.parks.push(new Park('Green Park', 1987, 215, 0.2));
places.parks.push(new Park('National Park', 1894, 3541, 2.9));
places.parks.push(new Park('Oak Park', 1953, 949, 0.4));

places.streets.push(new Street('Ocean Avenue', 1999, 1.1, 4));
places.streets.push(new Street('Evergreen Street', 2008, 2.7, 2));
places.streets.push(new Street('4th Street', 2015, 0.8));
places.streets.push(new Street('Sunset Boulevard', 1982, 2.5, 5));

function calcTotAndAvg(arr) {
  var sum = arr.reduce(function (prev, cur, index) {
    return prev + cur;
  }, 0);
  return [sum.toFixed(2), (sum / arr.length).toFixed(2)];
}

function reportParks(p) {
  console.log('---------- PARKS REPORT ----------');

  // Density
  p.forEach(function (el) {
    return el.treeDensity();
  });

  // Average age
  var ages = p.map(function (el) {
    return el.calcAge();
  });

  var _calcTotAndAvg = calcTotAndAvg(ages),
      _calcTotAndAvg2 = _slicedToArray(_calcTotAndAvg, 2),
      totalAge = _calcTotAndAvg2[0],
      avgAge = _calcTotAndAvg2[1]; // Destructuring


  console.log('Our ' + p.length + ' parks have an average age of ' + avgAge + ' years');

  // Which park has more than 1000 trees
  var i = p.findIndex(function (el) {
    return el.trees >= 1000;
  });
  console.log(p[i].name + ' has more than 1000 trees');
}

function reportStreets(s) {
  console.log('---------- STREETS REPORT ----------');

  // Total and average length of the town's streets
  var lengths = s.map(function (el) {
    return el.length;
  });

  var _calcTotAndAvg3 = calcTotAndAvg(lengths),
      _calcTotAndAvg4 = _slicedToArray(_calcTotAndAvg3, 2),
      totalLength = _calcTotAndAvg4[0],
      avgLength = _calcTotAndAvg4[1];

  console.log('Our ' + s.length + ' streets have a total length of ' + totalLength + ' km, with an average of ' + avgLength + ' km.');

  // Classify sizes
  s.forEach(function (el) {
    return el.classifyStreet();
  });
}

reportParks(places.parks);
reportStreets(places.streets);
