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
    this.area = area; // km2
  }

  treeDensity() {
    const density = (this.trees / this.area).toFixed(2);
    console.log(`${this.name} has a tree densisty of ${density} trees per square km.`);
  }

}

class Street extends Place {

  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, built in ${this.buildYear} is a ${classification.get(this.size)} street.`);
  }

}

const places = {
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
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum.toFixed(2), (sum / arr.length).toFixed(2)];  
}

function reportParks(p) {
  console.log('---------- PARKS REPORT ----------');
  
  // Density
  p.forEach(el => el.treeDensity());

  // Average age
  const ages = p.map(el => el.calcAge());
  const [totalAge, avgAge] = calcTotAndAvg(ages); // Destructuring
  console.log(`Our ${p.length} parks have an average age of ${avgAge} years`);

  // Which park has more than 1000 trees
  const i = p.findIndex(el => el.trees >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
  console.log('---------- STREETS REPORT ----------');
  
  // Total and average length of the town's streets
  const lengths = s.map(el => el.length);
  const [totalLength, avgLength] = calcTotAndAvg(lengths);
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
  
  // Classify sizes
  s.forEach(el => el.classifyStreet());    
}

reportParks(places.parks);
reportStreets(places.streets);
