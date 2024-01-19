class SVG {
    // properties
    constructor(shapeCode, textCode) {
        this.width = "250";
        this.height = "250";
        this.shape = shapeCode;
        this.text = textCode;
    }

    // methods
    render() {
        return `
    <svg width="${this.width}" height="${this.height}">
        ${this.shape}
        ${this.text}
    </svg>`
    }
}

class Shape {
    // properties
    constructor(colorInput, logoShape) {
        this.shapeColor = colorInput
        console.log('colorInput',colorInput, 'colorInput type: ', typeof colorInput, 'logoShape', logoShape);
        let shape = '';
        switch(logoShape){
            case 'square':
                shape = `<rect width="250" height="250" fill="${colorInput}"a/>`
            break;
            case 'triangle':
                shape = `<polygon points="125,0 0, 250 250 250" fill="${colorInput}" class="triangle" />`
            break;
            case 'circle':
                shape = `<circle cx="125" cy="125" r="100" fill="${colorInput}"/>`
            break;
            default:
                break;
        }
        this.returnVal = shape
    }

    // methods
    render() {
        return this.returnVal
        // // ^ for each separate shape?  and adjust ?this.color .this.text for each in fill section?
        // return <rect width="250" height="250" fill="green"/>   
        // return <polygon points="125,0 0, 250 250 250" fill="green" class="triangle" />


    }
}




class Text {
    // properties
    constructor(content, colorInput) {
        this.content = content;
        this.textColor = colorInput;
    }

    // methods
    render() {
        return `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="60px" font-family="Arial" dy=".3em">${this.content}</text>`
    }
}

module.exports = {
    SVG,
    Shape,
    Text
}



