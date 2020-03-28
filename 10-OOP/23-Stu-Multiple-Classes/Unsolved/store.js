class Store {
  constructor(name, stock, revenue = 0) {
    this.name = name;
    this.stock = stock;
    this.revenue = revenue;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

  processProductSale(prodName){
    this.stock.forEach(toy => {
      if(toy.name === prodName){
        if(toy.count > 0){
          toy.count--;
          this.revenue += toy.price;
        }else{
          console.log("Out of Stock!");
        }
      }
    });
  }

  replenishStock(name, count){
    this.stock.forEach(toy => {
      if(toy.name === name){
        toy.count += count;
      }
    });
  }
}

module.exports = Store;
