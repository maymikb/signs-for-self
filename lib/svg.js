class SVG {
    // properties
    constructor(shapeCode, textCode) {
        this.width = "250";
        this.height= "250";
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
    constructor(colorInput) {
        this.shapeColor = colorInput
    }

    // methods
    render () {
        return `<circle cx="125" cy="125" r="100" fill="${this.shapeColor}" />`
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
