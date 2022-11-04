class Circle {
    constructor(redius = 1.0, color = 'red') {
        this.redius = redius;
        this.color = color;
    }
    getRedius() {
        return this.redius;
    }
    setRedius(redius) {
        this.redius = redius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        return 'Circle [redius = ' + this.redius + ', color = ' + this.color + "]";
    }
    getArea() {
        return (Math.PI * this.redius * this.redius);
    }
    getCircleference() {
        return (2 * Math.PI * this.redius);
    }
}