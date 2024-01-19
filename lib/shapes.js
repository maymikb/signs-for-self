const Shape = require('./shapes');   //?? redundant? and line 16?

class Shape {
    constructor(textColor, textContent, shapeColor) {
        this.shapeColor = shapeColor;
        this.textContent = textContent;
        this.textColor = textColor;
    }

    render(){
        return 'Generating template'
    }
}


// module.exports =("./shapes.js")     ??