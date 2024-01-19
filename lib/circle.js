class Circle extends Shape {
    constructor(textColor, textContent, shapeColor) {
        super(textColor, textContent, shapeColor);
    }
    render(){
        let blankSVGString =  super.render();
        let shapeTag = 'for a circle'; 
        return blankSVGString + shapeTag;
    }
}

let square = new Circle('purple', 'her', 'red');
console.log(Circle.textColor);
console.log(Circle.textContent);
console.log(Circle.shapeColor);
console.log(Circle.render());

module.exports = Circle;