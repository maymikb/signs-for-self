class Triangle extends Shape {
    constructor(textColor, textContent, shapeColor) {
        super(textColor, textContent, shapeColor);
    }
    render(){
        let blankSVGString =  super.render();
        let shapeTag = 'for a triangle';
        return blankSVGString + shapeTag;
    }
}

let square = new Triangle('red', 'YYY', 'green');
console.log(Triangle.textColor);
console.log(Triangle.textContent);
console.log(Triangle.shapeColor);
console.log(Triangle.render());

module.exports = Triangle;
 //import?