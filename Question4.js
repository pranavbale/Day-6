class uber {

    // constructor for uber car it has fixed cost 50 Rs.
    constructor() {
        this.price = 50;
    }

    // function to find the total cost on the basic of kilometer
    kmPrice(km) {
        this.price *= km;
        return this.price;
    }

    // if toll exit then it add 50 Rs toll tax 
    addToll() {
        this.price += 50;
        return this.price;
    }
}