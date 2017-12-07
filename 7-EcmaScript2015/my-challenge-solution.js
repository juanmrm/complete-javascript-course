class Place {

  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }

  calcAge() {
    return new Date().getFullYear() - this.buildYear;
  }

}

class Park extends Place {

  constructor(name, buildYear, trees, area) {
    super(name, buildYear);
    this.trees = trees;
    this.area = area;
  }

  treeDensity() {
    console.log(`${this.name} has a tree densisty of ${(this.trees / this.area).toFixed(2)} trees per square km`);
  }

}

class Street extends Place {

  constructor(name, buildYear, length, size = 'normal') {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  sizeClassification() {
    console.log(`${this.name}, built in ${this.buildYear} is a ${this.size} street.`);
  }

}

const places = {
  parks: [],
  streets: []
};

places.parks.push(new Park('Green Park', 1972, 570, 3));
places.parks.push(new Park('National Park', 1850, 3000, 6));
places.parks.push(new Park('Oak Park', 1780, 2500, 5));

places.streets.push(new Street('Ocean Avenue', 1999, 6, 'big'));
places.streets.push(new Street('Evergreen Street', 2008, 2, 'small'));
places.streets.push(new Street('4th Street', 2015, 4));
places.streets.push(new Street('Sunset Boulevard', 1982, 10, 'huge'));

console.log('---------- PARKS REPORT ----------');
const totalAge = places.parks
  .map(el => el.calcAge())
  .reduce((preValue, curValue) => preValue + curValue);
console.log(`Our ${places.parks.length} parks have and average age of ` +
            `${(totalAge / places.parks.length).toFixed(2)} years`);
places.parks.forEach(el => el.treeDensity());
const parkMoreThan1000 = places.parks.find(el => el.trees > 1000);
console.log(`${parkMoreThan1000.name} has more than 1000 trees`);

console.log('---------- STREETS REPORT ----------');
const totalLength = places.streets
  .map(el => el.length)
  .reduce((preValue, curValue) => preValue + curValue);
console.log(`Our ${places.streets.length} streets have a total length of ${totalLength} km, ` +
            `with an average age of ${(totalLength / places.streets.length).toFixed(2)} km`);
places.streets.forEach(el => el.sizeClassification());
