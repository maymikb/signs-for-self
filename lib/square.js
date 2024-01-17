class Square extends Shape {
    constructor(textColor, textContent, shapeColor) {
        super(textColor, textContent, shapeColor);
    }
    render(){
        let blankSVGString =  super.render();
        let shapeTag = 'for a square';
        return blankSVGString + shapeTag;
    }
}

let square = new Square('red', 'Hello World', 'green');
console.log(square.textColor);
console.log(square.shapeColor);
console.log(square.textContent);
console.log(square.render());

module.exports = Square;