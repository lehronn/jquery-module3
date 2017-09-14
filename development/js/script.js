// scripts.js
Phone.prototype.printInfo = function() {
  console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', and the price is ' + this.price + ' PLN.');
};

Phone.prototype.printSys = function() {
  console.log('Operating system of ' + this.brand + ' is ' + this.system + '.');
};

function Phone(brand, price, color, system) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.system = system;
}

var iPhone6s = new Phone("Apple", '2250', 'silver', 'iOS'),
    OnePlusOne = new Phone('One Plus', '1450', 'black', 'Android'),
    SamsungGalaxyS6 = new Phone('Samsung', 2500, 'white', 'Android'),
    Huawei = new Phone('Huawei', 1100,'gold', 'Android');

iPhone6s.printInfo();
OnePlusOne.printInfo();
SamsungGalaxyS6.printInfo();

iPhone6s.printSys();
Huawei.printSys();
