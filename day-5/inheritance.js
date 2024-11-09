// class Rectangle {
//     constructor(w, h) {
//         this.w = w;
//         this.h = h;
//     }
//     area() {
//         return this.w * this.h;
//     }
// }

// class Square extends Rectangle {
//     constructor(w, h, s) {
//         super(w,h)
//         this.s = s
//     }
    
//     show() {
//         return `this is from parent class (rectangle) ${this.w} and ${this.h}, this from square ${this.s}`
//     }
// }

// let mySquare = new Square(10,20,30)

// console.log(`this is area from Rectangle ${mySquare.area()}, this show from Square ${mySquare.show()}`)

class Grand {
    constructor() {
        this.showGrand()
    }

    showGrand() {
        console.log('Grand! ')
    }
}

class Parent extends Grand {
    showParent() {
        super.showGrand()
        console.log('Parent! ')
    }
}

class Child extends Parent {
    showChild() {
        super.showParent()
        console.log('Child! ')
    }
}

// let g = new Grand()
// let p = new Parent()
// let c = new Child()

class Rectangle {
    constructor (w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return this.w * this.h
}

class Square extends Rectangle {
    constructor(s) {
        super(s, s)
    }
}

const rec = new Rectangle(3, 4)
const sqr = new Square(3)

// console.log(rec.area())
// console.log(sqr.area())
